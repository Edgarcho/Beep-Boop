function convertNumber(userNumber){
  var numberCount = [];
  for (var index = 0; index <= userNumber; index ++){
    debugger
    if(index === 0){
      //index = "Beep!";
      numberCount.push("Beep!");
      //index = 0;
      debugger
    }else if(index === 1){
      //index = "Boop!";
      numberCount.push("Boop!");
      //index = 1;
    }else if(index % 3 === 0){
      //index = "I'm sorry, Dave. I'm afraid I can't do that.";
      numberCount.push("I'm sorry, Dave. I'm afraid I can't do that.");
      //index = 3;
      debugger
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
