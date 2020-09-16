var msg = "Hello";
var timeHelper = require('./timeStuff');
var fullMsg = `${msg} the time is ${ timeHelper.getTheTime ()}`;
console.log(fullMsg);

var today = timeHelper.getTheDay();
console.info(today);