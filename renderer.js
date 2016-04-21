var fs = require("fs");

function mergeValues(values, content){
  //cycle over the keys
  for(var key in values){
    //replace all {{key}} with the value from the values object
    content = content.replace("{{"+ key +"}}",values[key]);
  }
  //return merged content
  return content; 
}

function view(templateName, values, response){
  //Read from the template file
  var fileContents = fs.readFileSync('./'+ templateName +'.html', {encoding: "utf8"});
  //insert values into the content
  fileContents = mergeValues(values, fileContents);
  //wirte out to the response
  response.write(fileContents);
}
module.exports.view = view;

