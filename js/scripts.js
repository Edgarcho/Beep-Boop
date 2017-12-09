function convertNumber(userNumber){
  var numberCount = [];
  for (var index = 0; index <= userNumber; index ++){
    debugger
    if(index === 0){
      numberCount.push("Beep!");
    }else if(index === 1){
      numberCount.push("Boop!");
    }else if(index % 3 === 0){
      numberCount.push("I'm sorry, Dave. I'm afraid I can't do that.");
    }
    else{
      numberCount.push(index);
    }
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
