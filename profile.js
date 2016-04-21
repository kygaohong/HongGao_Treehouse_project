var EventEmitter = require("events").EventEmitter;
var https = require("https");
var http = require("http");
var util = require("util");

/* An EventEmitter to get my profile at treehouse. */
function Profile(username) {

    EventEmitter.call(this);

    profileEmitter = this;

    //Connect to the API URL (https://teamtreehouse.com/username.json)
    var request = https.get("https://teamtreehouse.com/" + username + ".json", function(response) {
        var body = "";

        //Read the data
        response.on('data', function (chunk) {
            body += chunk;
            profileEmitter.emit("data", chunk);
        });

        response.on('end', function () {
            if(response.statusCode === 200) {
                    var profile = JSON.parse(body);
                    profileEmitter.emit("end", profile);
            }
        });
    });
}

util.inherits( Profile, EventEmitter );

module.exports = Profile;