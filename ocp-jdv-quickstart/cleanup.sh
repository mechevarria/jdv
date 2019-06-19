#!/bin/bash

oc project jdvquick

oc delete all --selector app=accounts-postgresql
oc delete all --selector app=datavirt63-basic-s2i
oc delete serviceaccount datavirt-service-account
oc delete secret datavirt-app-config
oc delete secret datavirt-app-secret
oc delete project jdvquick
