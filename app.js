//Goal: use Node.js to get my badge count and JavsScript point from the treehouse website
var router = require("./router.js");

//Create a web server
var http = require('http');
http.createServer(function(request, response){
  router.index(request, response);
}).listen(3000);
console.log('Server running at http://<workspace-url>/');

