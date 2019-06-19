var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var config = require('./config.json');
var url = config.url;

// Use connect method to connect to the server
MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    console.log('Connected successfully to ' + url);

    dropCollection(db, function() {
        db.close();
    });
});

var dropCollection = function(db, callback) {

    var collection = db.collection(config.collection);

    collection.drop(function(err, result){
        assert.equal(null, err);
        console.log('Successfully dropped collection ' + config.collection);
        callback(result);
    });
};

