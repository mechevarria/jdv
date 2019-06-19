#!/bin/bash

jboss_cli=~/local/runtimes/6-jdv/bin/jboss-cli.sh

if [[ "$1" = "rm" ]] ; then
  ${jboss_cli} -c file="cli/rm-ds.cli"
  sleep 7
  ${jboss_cli} -c file="cli/rm-driver-module.cli"

elif [[ "$1" = "add" ]]; then
  ${jboss_cli} -c file="cli/add-module-driver.cli"
  sleep 7
  ${jboss_cli} -c file="cli/add-ds.cli"

else
  echo "usage: jboss.sh [add|rm]"
  exit
fi
