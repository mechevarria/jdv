#!/bin/bash

jboss_cli=~/local/runtimes/6-jdv/bin/jboss-cli.sh

${jboss_cli} -c file="cli/add-resource.cli"
