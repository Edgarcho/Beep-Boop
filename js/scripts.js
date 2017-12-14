function convertNumber(userNumber){
  var outcome = [];
  for (var index = 0; index <= userNumber; index ++){
    outcome.push(index);
  }
  for (var i = 1; i <= outcome.length; i++) {
    if (outcome[i] % 3 === 0) {
      outcome[i] = ("I'm sorry, Dave. I'm afraid I can't do that.");
    }
  }
  var outcomeString = outcome.toString().replace(/1/g, "Boop!");
  var finalOutcome = outcomeString.toString().replace(/0/g, "Beep!")
  return finalOutcome
}

// user interface logic
$(document).ready(function(){
  $("form#userInput").submit(function(event){
    event.preventDefault();
    var userNumber = parseInt($("input#numberInput").val());
    var respond = convertNumber(userNumber);
    $(".result").text(respond).show();
  });
});
