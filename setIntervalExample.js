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