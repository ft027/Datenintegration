/**
 * Created by fabiantschullik on 28.04.16.
 */


/**
 * Bibliotheken
 */

//allows http requests
var request = require('request');

//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

var assert = require('assert');

/**
 * Ende Bibliotheken
 */

/**
 * Connect zur MongoDB
 */

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost/test';





var graphAPI = "https://graph.facebook.com/"
var myRequest = null;
var fbID = "308093096059/feed";
var token = "?access_token=";
var graphRequest = "";
var url = buildRequestURL(graphAPI, fbID, graphRequest, token);

function buildRequestURL(graphAPI, fbID, graphRequest, token){
    return graphAPI+fbID+graphRequest+token;
}



request(url, function (error, response, body) {

    var test = JSON.parse(body);
    console.log();
    console.log(test);
    console.log(body.length);


    console.log(test.paging.next);

});



//console.log(buildRequestURL(graphAPI, fbID, graphRequest, token));



console.log("hallo");


// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
    if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
        //HURRAY!! We are connected. :)
        console.log('Connection established to', url);

        // Get the documents collection
        //var collection = db.collection('users');

        //Create some users
        var user1 = {name: 'modulus admin', age: 42, roles: ['admin', 'moderator', 'user']};
        var user2 = {name: 'modulus user', age: 22, roles: ['user']};
        var user3 = {name: 'modulus super admin', age: 92, roles: ['super-admin', 'admin', 'moderator', 'user']};

        // Insert some users
        collection.insert([user1, user2, user3], function (err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:', result.length, result);
            }
            //Close connection
            db.close();
        });
    }
});



