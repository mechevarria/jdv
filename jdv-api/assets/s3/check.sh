#!/bin/bash

url=https://s3.amazonaws.com/mechevarria-files/org.csv

if curl --output /dev/null --silent --head --fail "$url"; then
  echo "URL exists: $url"
else
  echo "URL does not exist: $url"
fi
