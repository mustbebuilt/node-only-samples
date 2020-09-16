var http = require('http');
var server = http.createServer(function(req, res){
  //console.info(req);
  res.writeHead(200, {'Content-Type':'text/html'});
  if(req.url === "/hello"){
  res.write(` <html>
    <body> <h1>Hello</h1>
    <p>${req.url}</p>
    <p>${req.method}</p>
    </body>
    </html> `);
  }
  if(req.url === "/goodbye"){
  res.write(` <html>
    <body> <h1>Goodbye</h1>
    <p>${req.url}</p>
    <p>${req.method}</p>
    </body>
    </html> `);
  }
console.info(res);
res.end();
});
server.listen(3000);
console.log("Server running on Port 3000");