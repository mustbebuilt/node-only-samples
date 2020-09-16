var fs = require('fs'); 
var path = require('path'); 
var existing = fs.readFileSync("./stuff.json", "UTF-8"); 
var returnData = JSON.parse(existing);
var newData = {"name":"Jon","job":"Driver"}; returnData.staff.push(newData);
fs.writeFile("./stuff.json", JSON.stringify(returnData), function(){
  console.log('added');
})