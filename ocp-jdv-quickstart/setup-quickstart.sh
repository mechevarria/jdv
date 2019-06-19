#!/bin/bash

oc new-project jdvquick --display-name="JDV Quickstart"

oc project jdvquick

echo "Creating postgresql database"

db_service=accounts-postgresql

oc new-app \
-p POSTGRESQL_USER=pguser \
-p POSTGRESQL_PASSWORD=pgpass \
-p POSTGRESQL_DATABASE=accounts \
-p POSTGRESQL_VERSION=9.5 \
-p DATABASE_SERVICE_NAME=${db_service} \
postgresql-persistent

oc env dc/${db_service} POSTGRESQL_MAX_PREPARED_TRANSACTIONS=10

echo "Waiting for postgresql pod to start."
sleep 15
until 
	oc get pods -l name=${db_service} | grep -m 1 "Running"
do
    oc get pods -l name=${db_service}
	sleep 3
done

echo "postgresql is ready, now loading data"

pod_name=$(oc get pods -l name=${db_service} | { read line1 ; read line2 ; echo "$line2" ; } | awk '{print $1;}')

echo "loading data into pod ${pod_name}"

cat customer-schema.sql |  oc exec ${pod_name} -i -- scl enable rh-postgresql95 -- psql -U pguser -d accounts

echo "Finished loading data into postgresql"

# Instructions from https://github.com/jboss-openshift/openshift-quickstarts/tree/master/datavirt/dynamicvdb-datafederation

echo "Creating JDV service account and secrets"
oc create serviceaccount datavirt-service-account
oc policy add-role-to-user view system:serviceaccount:jdvquick:datavirt-service-account
oc secret new datavirt-app-secret keystore.jks jgroups.jceks
oc secrets new datavirt-app-config datasources.env
oc secrets link datavirt-service-account datavirt-app-secret datavirt-app-config

teiid_user=teiidUser
teiid_pass=Redhat1!

oc new-app --template=datavirt63-basic-s2i \
-p APPLICATION_NAME=datavirt-app \
-p CONFIGURATION_NAME=datavirt-app-config \
-p SOURCE_REPOSITORY_URL=https://github.com/jboss-openshift/openshift-quickstarts \
-p SOURCE_REPOSITORY_REF=master \
-p CONTEXT_DIR=datavirt/dynamicvdb-datafederation/app \
-p TEIID_USERNAME=${teiid_user} \
-p TEIID_PASSWORD=${teiid_pass} \
-p JGROUPS_CLUSTER_PASSWORD=openshift \

oc env dc/datavirt-app QS_DB_TYPE=postgresql

sleep 1
route_name=$(oc get routes -l app=datavirt63-basic-s2i | { read line1 ; read line2 ; echo "$line2" ; } | awk '{print $2;}')

echo "Finished deploying JDV quickstart. Credentials are ${teiid_user}/${teiid_pass}"
echo "Example query: http://${route_name}/odata4/Portfolio/Accounts/account?\$format=json"
echo "Metadata: http://${route_name}/odata4/Portfolio/Accounts/\$metadata"
