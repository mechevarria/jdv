#/bin/bash

# example install: download solr-6.5.0.tgz and extract the install_solr_service.sh from the bin directory in the archive
# sudo ./install_solr_service.sh solr-6.5.0.tgz

# If you don't want solr running at start
# sudo systemctl disable solr

# add current user to solr group.  So you can browse the solr directories
sudo usermod $USER -a -G solr

# create core for state data
sudo runuser -l solr -c '/opt/solr/bin/solr create -c states'

# create firewall rule for solr
sudo firewall-cmd --zone=public --add-port=8983/tcp --permanent
sudo systemctl restart firewalld

# for the 'node insert.js' command to work you need manually specify the geoCoordinates field
# solr admin -> Schema -> Add Field -> name:geoCoordinates, fieldType:text_general
