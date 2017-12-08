function convertNumber(userNumber){
  var numberCount = [];
  var word = ["Beep!","Boop!","I'm sorry, Dave. I'm afraid I can't do that."] // word[0]= Beep , word[1]= Boop , word[2] = "I'm sorry"
  for (var index = 0; index <= userNumber; index ++){
    if(index === 0){
      index = "Beep!"
      numberCount.push(index);
      debugger
    }else{
      return index;
    }
    //numberCount.push(index);
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
