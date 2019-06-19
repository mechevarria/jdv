#!/bin/bash

sudo cp mongodb-org-3.4.repo /etc/yum.repos.d/
sudo yum update
sudo yum install -y mongodb-org

# comment this line to NOT allow remote access to server
sudo sed -i 's/bindIp/#bindIp/g' /etc/mongod.conf

# firewall exceptions for mongo
sudo firewall-cmd --zone=public --add-port=27017/tcp --permanent
sudo systemctl restart firewalld

# load data into mongo.  'node clean.js' will remove this data
npm install
node insert.js
