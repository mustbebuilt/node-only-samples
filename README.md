# Creating NodeJS and/or Web programs in Codio

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

>Note: There is a second undefined because `console.info()` doesn't return a value. This has no impact in this situation.

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

