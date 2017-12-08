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
    var userNumber = parseInt($("input#numberInput").val());
    var result = convertNumber(userNumber);
    $("#result").text(result).show(); 
  });
});
