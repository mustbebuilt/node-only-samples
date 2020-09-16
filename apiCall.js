var http = require("http");
var options = { 
  hostname : "environment.data.gov.uk", 
  port : 443, 
  path :"flood-monitoring/id/floods", 
  method : "GET"
}
// var options = { 
//   hostname : "www.ywonline.co.uk", 
//   port : 80, 
//   path :"/web/newincid.nsf/incidentsjson", 
//   method : "GET"
// }
var req = http.request(options, function(res){
      console.log(`Server ${res.statusCode}`);
     var myData = ""; res.on("data", function(chunk){ 
     console.log(chunk); myData+= chunk; })
     res.on('end', function(){
        console.info(myData);
     })
})

req.on('error', function(err) {
    // Handle error
  console.dir(err);
});