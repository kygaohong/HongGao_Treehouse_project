var Profile = require ("./profile.js");
var renderer = require("./renderer.js");
var querystring = require ("querystring");
var commonHeaders = {'Content-Type':'text/html'};


//Handle HTTP route GET /:username i.e. /honggao
function Index(request, response){
     response.writeHead(200, commonHeaders);    
    //get json from Treehouse
     var studentProfile = new Profile('honggao');
    
      //on "end"
      studentProfile.on("end", function (profileJSON){
      //show profile
        //Store the values which we need
        var values = {
        avatarUrl: profileJSON.gravatar_url, 
        username: profileJSON.profile_name,
        badges: profileJSON.badges.length,
        javascriptPoints: profileJSON.points.JavaScript
        }
        //Simple response
        renderer.view("index", values, response);
        response.end();
      });
  
}

module.exports.index = Index;