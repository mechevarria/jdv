var SolrNode = require('solr-node');

var config = require('./config.json');

var client = new SolrNode({
    host: config.host,
    port: config.port,
    core: config.core
});

var strQuery = '*:*';
 
// Delete document using strQuery 
client.delete(strQuery, function(err, result) {
   if (err) {
      console.log(err);
      return;
   }
   console.log('Response:', result.responseHeader);
});