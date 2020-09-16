exports.getTheTime = function(){ 
  var myDate = new Date(); 
  var myTime = myDate.toTimeString(); 
  return(myTime);
}

exports.getTheDay = function(){
  var myDate = new Date(); 
  var myDay = myDate.toDateString();
  return(myDay);
}
