var MongoClient = require('mongodb').MongoClient;
var base64 = require('base-64');

var assert = require('assert');

var config = require('./config.json');

var url = config.url;
var data = require('./' + config.file);

// Use connect method to connect to the server
MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    console.log('Connected successfully to ' + url);

    insertDocuments(db, function () {
        db.close();
    });
});

var insertDocuments = function (db, callback) {

    var collection = db.collection(config.collection);

    var documents = [];

    data.features.forEach(function (feature) {
        var document = {};
        document.name = feature.properties.NAME;
        document.type = 'Feature';
        document.geoType = feature.geometry.type;

        var encoded = base64.encode(JSON.stringify(feature));
        document.geoCoordinates = encoded;

        documents.push(document);
    });

    collection.insertMany(documents, function (err, result) {
        assert.equal(err, null);
        console.log('Successfully inserted ' + result.ops.length + ' documents');
        callback(result);
    });
};
