/**
 * Created by fabiantschullik on 28.04.16.
 */

var request = require('request');



var graphAPI = "https://graph.facebook.com/"
var myRequest = null;
var fbID = "308093096059";
var token = "?access_token=1117824648290319|UCeeSWXLQd5Y6C5bPDBCIMeXx9s";
var graphRequest = "";
var url = buildRequestURL(graphAPI, fbID, graphRequest, token);

function buildRequestURL(graphAPI, fbID, graphRequest, token){
    return graphAPI+fbID+graphRequest+token;
}


request(url, function (error, response, body) {
        
    var test = JSON.parse(body);
    console.log(test);

});



console.log(buildRequestURL(graphAPI, fbID, graphRequest, token));



