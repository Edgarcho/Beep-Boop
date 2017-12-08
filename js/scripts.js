function convertNumber(userNumber){
  var numberCount = [];
  //var word = ["Beep!","Boop!","I'm sorry, Dave. I'm afraid I can't do that."] // word[0]= Beep , word[1]= Boop , word[2] = "I'm sorry"
  for (var index = 0; index <= userNumber; index ++){
    debugger
    if(index === 0){
      index = "Beep!";
      numberCount.push(index);
      index = 0;
      debugger
    }else if(index === 1){
      index = "Boop!";
      numberCount.push(index);
      index = 1;
    }else if(index % 3 === 0){
      index = "I'm sorry, Dave. I'm afraid I can't do that.";
      numberCount.push(index);
      index = 3;
      debugger
    }
    else{
      numberCount.push(index);
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
