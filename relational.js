var request = require('request');
var ppnsList = require("./ppnlist.json");
var exemplars = require("./exemplars.json");
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost/test';
var assert = require('assert');



//node-mysql
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : '',
    user     : 'root',
    password : '',
    database : 'test'
});


function ppnDatabase() {

    for (var i = 0; i<ppnsList.length; i++){

        var post = {ppn: ppnsList[i]};
        connection.query('INSERT INTO Titel SET ?', post, function(err, result) {
            if (!err)
                console.log(ppnsList[i]+'OK');
            else
                console.log('Error while performing Query.'+err);
        });
    }
}

function mongoDatabase(){

    //mongoose
    MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log('Unable to connect to the mongoDB server. Error:', err);
        } else {
            console.log('Connection established to', url);


        }});



}


var allData = function(db, callback) {
    var cursor =db.collection('swb').find( );
    cursor.each(function(err, doc) {
        assert.equal(err, null);
        if (doc != null) {

            var xmlSWB = doc.xml

            var




            //var data=xmlSWB.substring(xmlSWB.lastIndexOf('code="9">')+1,xmlSWB.lastIndexOf("</subfield>"));
            //console.log(data);
            //console.log(doc);







MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    allData(db, function() {
        db.close();
    });
});




//mongoDatabase();
ppnDatabase();









