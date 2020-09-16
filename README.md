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




