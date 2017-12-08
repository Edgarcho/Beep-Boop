


// user interface logic 
$(document).ready(function(){
  $("form#userInput").submit(function(){
    event.preventDefault();
    var userNumber = parseInt($("input#numberInput").val()); //convert the string to a number
    var result = convertNumber(userNumber); // runs the function convertNumber with the value of the user and returns the value as result.
    $("#result").text(result); //return the result in text
  }
}
