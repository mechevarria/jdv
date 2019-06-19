var SolrNode = require('solr-node');
var base64 = require('base-64');

//var assert = require('assert');

var config = require('./config.json');

var dataArray = require('./' + config.file);

var client = new SolrNode({
    host: config.host,
    port: config.port,
    core: config.core
});

dataArray.forEach(function(state) {

  client.update(state, function(err, result) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Response:', result.responseHeader);
    });
  
});
