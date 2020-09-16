# Check Node is Running

This Codio Project is already set up with NodeJS running.  To test Node open a New Terminal and type the following:

``` 
node -v 
```

The current version of NodeJS installed should then appear eg:

```
v10.21.0
```

# Node Command Prompt

In the terminal window enter the Node command line by typing:

```
node
```

The ```>``` prompt should indicate you are in the Node Command Prompt.

Once in the Node command line Javascript commands such as `console` can be used.  `console` is allows messages to output and is useful for basic debugging.  Make sure you are still in the Node Command Prompt and type:

```
>console.info('Hello command line')
```

.. and your message should appear.

> Note: There is a second undefined because `console.info()` doesn't return a value. This has no impact in this situation.

# Running an Expression

Node.js is Javascript so you write and run write expressions.

In the terminal window enter the Node command line by typing:

```
node
```

The ```>``` prompt should indicate you are in the Node Command Prompt.

Now add:

```
for(var i=0; i<11; i++){
  console.info(i); 
}
```
Hit enter to see Javascript count through the loop.

Node.js will automatically recognised that the statement isn't finished when you type enter after line one.

Notice you are still in the Node process using `Ctrl>C` or `.exit` to exit to the Terminal prompt.

# Build and Run Files

To run a file create a file with a JS file extension such as:

```
console.log("Hello World");
```

Save the above as <em>hello.js</em> and then call the file via:

```
node hello.js
```

No need to use the Node prompt.  Alternatively you can drop the .js file extension and use:

```
node hello
```
# The Scope of the Global Object

In Client Side Javascript we are used to working with the DOM and the window object. In Node there is no window but we do have a Global Object. The console call in the previous example could have been written in long hand as:

```
global.console.log("Hello World");
```

When variables are created in a file they belong to the scope of the file (or module) not the global scope. Try:

```
var myVar = "Hi"; 
console.log(global.myVar);
// undefined
console.log(myVar);
// Hi
```

# Useful Globals

A list of of globals can be found at: https://nodejs.org/api/globals.html.

Useful ones include `__dirname`, `__filename`.

```
console.log(__dirname);
console.log(__filename);
```

The `process` global object provides information about, and control over, the current Node.js process. This can be used to pass values to the process as arguments.

```
// get argument of process
console.log(process.argv);
```

If you had a file of <em>helloVar.js</em> you could pass values with:

```
node helloVar.js Martin "Hello There";
```

The first value of the array will be the execPath of the process, the second the path to the file and then the rest list the values. As such "Hello There" could be accessed with `process.argv[3]`.

User input can also be prompted with process.stdin and outputs written with process.stdout.



```
process.stdout.write("Pounds: ");
process.stdin.on('data', function(data){
  //console.dir(data);
  var pounds = Number(data);
  var euros = pounds * 0.85;
  process.stdout.write("\n");
  process.stdout.write(`Euros: ${euros}\n`);
  process.stdout.write("\n");
  process.exit();
})
```

The above also illustrates the use of events and event handlers.

# Vanilla Javascript

Node is Javascript. The following demonstrates how `setInterval` and `setTimeout` behave in the exactly the same way as their browser equivalents.

```
var endTime = 3000;
var currentTime = 0;
var waitInterval = 1000;
var repeatInterval = 500;
console.log("Wait for it");
var myIntVal = setInterval(function(){ 
  currentTime += waitInterval;
  console.log(`waiting ${currentTime/1000} seconds ....`);
  }, repeatInterval); 
setTimeout(function(){ 
   clearInterval(myIntVal);
   console.log("Over and Out");
   }, endTime);
```

# ES6

As Node is based on Google's V8 Javascript engine ES6 support is baked in. So we can use ES6 features like template strings with its use of back ticks ` and ${} variables.

```
var myArray = ['Bob','Fred','Jane','Helen'];
console.log(`Hello ${myArray[0]}, how are you?`);
```

# Module, export and require

Modules are libraries of code that can be used in Node.

There are many core modules such as `path` and `http` that we'll see later but you can also create your own using the exports keyword and then load them into your application with `require`.

In Node every Javascript file is a module. These can be loaded into other files via `require`. When creating your own module use `module.exports` to make the module consumable.

Save the following as <em>myModules.js</em>.

```
exports.eatCheese = function() {
  console.log('hmmmmm');
}
```

This file now exports a module.

With multiple methods this can also be written as:

```
module.exports = { 
  eatCheese : function(){ 
    console.log('hmmmmm'); }, 
  eatCrisps : function() { 
    console.log('Naughty');
  }
}
```

Create a second file called <em>consumeModule.js</em>To require it use:

```
var eat = require("./myModules");
eat.eatCheese();
```

The above is just an illustrative console. Let us build a slightly more complex example.

Create a file called <em>timeStuff.js</em> as follows:

```
var myDate = new Date();
var myTime = myDate.toTimeString();
console.info(myTime);
```

Outputs a console value. Change this to return a value by making this a function.

```
var getTheTime = function(){ 
  var myDate = new Date();
  var myTime = myDate.toTimeString();
  return(myTime);
}
```

We need to export this, so it can be used elsewhere amend it as follows:

```
exports.getTheTime = function(){ 
  var myDate = new Date(); 
  var myTime = myDate.toTimeString(); 
  return(myTime);
}
```

Now in a new file called <em>usingTime.js</em> require the <em>timeStuff.js</em> file. The `getTheTime()` method is now available to this second file:

```
var msg = "Hello";
var timeHelper = require('./timeStuff');
var fullMsg = `${msg} the time is ${ timeHelper.getTheTime ()}`;
console.log(fullMsg);
```

A module may export more than one method. Amend <em>timeStuff.js</em> to include a second exported method such as:

```
var getTheDay = function(){
  var myDate = new Date(); 
  var myDay = myDate.toDateString();
  return(myDay);
}
```

This new method can then be used in <em>usingTime.js</em>. with:

```
timeHelper.getTheDay();
```
# The Path Module

The previous examples were custom modules created by you the developer. Node has many built-in modules. They are required in the same way. The Path module provides utilities for working with file and directory paths.

```
var path = require("path");
console.log(path.basename(__filename));
```

The file system can be interogated and files/directories created via the ```fs``` core module.

To use the file system methods require it with:

```
var fs = require("fs");
```

With a target file of <em>stuff.json</em>:

```
{ "staff": [{"name":"Fred","job":"butcher"}] }
```

Create file to add to the JSON data with:

```
var fs = require('fs'); 
var path = require('path'); 
var existing = fs.readFileSync("./stuff.json", "UTF-8"); 
var returnData = JSON.parse(existing);
var newData = {"name":"Jon","job":"Driver"}; returnData.staff.push(newData);
fs.writeFile("./stuff.json", JSON.stringify(returnData), function(){
  console.log('added');
})
```

Load file details at first synchronously with `readFileSync()` thus won't write to file until has loaded.

# HTTP

The http module allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP). If you need to make a secure call there is a https module that can also be used.

The http module has a request method which takes options that define the request and then references a call back function.
As such we could do:

```
var http = require("http");
var options = { 
  hostname : "www.ywonline.co.uk", 
  port : 80, 
  path :"/web/newincid.nsf/incidentsjson", 
  method : "GET"
}
var req = http.request(options, function(res){ 
    // do something
})
```

This makes a call to an endpoint to retrieve a JSON file. The call back function can be set to listen for a number of events such as when data chunks are received and when the response ends. As we'll be received the data in chunks we'll concatenate them into a variable.

```
var req = http.request(options, function(res){
  console.log(`Server ${res.statusCode}`);
     var myData = ""; res.on("data", function(chunk){ 
     console.log(chunk); myData+= chunk; })
     res.on('end', function(){
        console.info(myData);
     })
})
```

To handle errors add an error event.

```
req.on("error", function(err){ 
  console.info(`Error: ${err.message}`)
})
```

The response will also need to be closed / ended.

```
req.end()
```

This outputs the data to prove we have been successful. However, we could also write it to a file by using the File System fs module. Add the file system module with:

```
var fs = require("fs");
```

Amend the 'end' event by adding:

```
fs.writeFile("latest.json", myData, function(err){ 
  if(err){ 
  console.info(err.message);
  }else{
  console.info("File Written")
  }
})
```

# Creating a Webserver with the http module

The `createServer()` method of the http module returns an instance of a http server. It also takes a function as a parameter.

It is this function that gets called every time there is a request to the webserver. It takes the form of a callback.

What this function receives as its first parameter is the request object. The request object will contain information about the request such as the headers, user information and possibly data.

The second argument is the response object. This is initially blank so the callback should be used to build up a response. This can be done through a range of methods to write content and headers to the response.

Handling the request and then creating a response is core to working with webservers.

# The Response Object

The `writeHead()` method of the response object can be used to write the http header adding such things as the content type.

The first parameter in the `writeHead()` method is the code for the http response - when successful you'd want this to be a 200.

> The 200 here is a http response code.  You'll be most familar  with the 404 'File Not Found' response code.

The second parameter for `writeHead()` method is a list of options related to the header such as the content type.

The end() method of the response object can be used to end the response and send data back to the browser.

```
var http = require("http");
var server = http.createServer(function(req, res){
  res.writeHead(200, {"Content-Type":"text/plain"});
  res.end("Hello World");
});
```

Next we need to tell the server instance what IP address and port to use to listen for requests. This is done using the `listen()` method of the server object. A console message will reassure us that the server is listening.

```
server.listen(3000);
console.log("Server running on Port 3000");
```

So the basic webserver code in full is:

```
var http = require("http");
var server = http.createServer(function(req, res){
  res.writeHead(200, {"Content-Type":"text/plain"});
  res.end("Hello World");
});
server.listen(3000);
console.log("Server running on Port 3000");
```

The above tells the server to listen to requests to on port 3000.

1. Running the node file as in previous examples via `node myServer`
1. Previewing the file thorough the Box URL drop-down

> Note: As you edit and experiment with this server file you will need to `Ctrl>C` to exit the server and then restart it.

Data can also be written to the response object's `write()` method if preferred leaving the `end()` method empty.

To write HTML change the response type to HTML as follows:

```
var http = require("http");
var server = http.createServer(function(req, res){ 
  res.writeHead(200, {"Content-Type":"text/html"});
  res.write(` <html> <body> <h1>Hello Node</h1> </body> </html> `); 
  res.end();
});
server.listen(3000);
console.log("Server running on Port 3000");
```

Restart the server file and revisit in the browser. Looking in the source code and you'll see the HTML outlined above.

#The Request Object

We could also output some information about the request. Add the following to the

```
var http = require("http");
var server = http.createServer(function(req, res){
res.writeHead(200, {"Content-Type":"text/html"});
res.end(` <html>
            <body>
                <h1>Hello Node</h1>
                 <p>${req.url}</p>
                 </body>
                 </html>
       `);
});
server.listen(3000);
console.log("Server running on Port 3000");
```

As such we could set up the code to response with different HTML based on a different request:

```
var http = require('http');
var server = createServer(function(req, res){
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
```

Test the above by calling `siteaddress/hello` and `siteaddress/goodbye`.  What happens when you try `siteaddress/test`?




