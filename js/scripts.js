function convertNumber(userNumber){
  var numberCount = [];
  for (var index = 0; index <= userNumber; index ++){
    numberCount.push(index);
  }
  return numberCount;
}


// user interface logic
$(document).ready(function(){
  $("form#userInput").submit(function(){
    event.preventDefault();
    var userNumber = parseInt($("input#numberInput").val()); //convert the string to a number
    var result = convertNumber(userNumber); // runs the function convertNumber with the value of the user and returns the value as result.
    $("#result").text(result).show(); //return the result in text
  });
});
