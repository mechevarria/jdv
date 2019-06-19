#!/bin/bash
sudo yum -y install postgresql postgresql-server postgresql-jdbc
sudo postgresql-setup initdb
sudo -u postgres sed -i 's/ident$/md5/g' /var/lib/pgsql/data/pg_hba.conf

# comment these lines to NOT allow connections from external hosts
sudo -u postgres sed -i 's$127.0.0.1/32$0.0.0.0/0$g' /var/lib/pgsql/data/pg_hba.conf
sudo -u postgres sed -i "s/#listen_addresses = 'localhost'/listen_addresses = '*'/g" /var/lib/pgsql/data/postgresql.conf

# create firewall rules for postgres
sudo firewall-cmd --permanent --zone=public --add-service=postgresql
sudo systemctl restart firewalld

sudo systemctl start postgresql
echo "Set jboss user password to jboss"
sudo -u postgres createuser -P jboss
sudo -u postgres createdb -O jboss jboss

psql -h 127.0.0.1 -U jboss jboss < create_us_parks.sql
psql -h 127.0.0.1 -U jboss jboss < create_itemmodel.sql
psql -h 127.0.0.1 -U jboss jboss < insert_us_parks.sql
psql -h 127.0.0.1 -U jboss jboss < insert_itemmodel.sql
