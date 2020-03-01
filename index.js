
var gamePattern = [];
var userClickedPattern = [];

var buttonColors = ["blue", "red", "green",  "yellow"];

//to level up/change h1 each time nextSequence runs
var level = 0;

//key press to start game
var started = false;
$(document).on('click',function(){
  if (started !=true){
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }

});



$(".btn").click(function() {
var userChosenColor = userClickedPattern.push(event.target.id);
playSound(userChosenColor);
animateButton();
checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {
  // var currentlevel=userClickedPattern;
  if(userClickedPattern[currentLevel]=== gamePattern[currentLevel]){
  if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
      nextSequence();
    }, 1000);
  }
}else{
    console.log("wrong");
    var playAudio = new Audio("sounds/wrong.mp3");
    playAudio.play();
    $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
      $("h1").text("Game Over. Press a Key to Restart.");
      startOver();
  }
}


function startOver(){
  level=0;
  started=false;
  gamePattern =[];
}
//when button is clicked




//random number generator
function nextSequence() {

userClickedPattern = [];
level++;
$("#level-title").text("Level " + level);

// recall(gamePattern);
var randomNumber= Math.floor(Math.random()*buttonColors.length);
var randomChosenColor = buttonColors[randomNumber];
gamePattern.push(randomChosenColor);

$("#"+ randomChosenColor).fadeOut(500).fadeIn(500);

var audioPlay = new Audio("sounds/" + randomChosenColor + ".mp3");
audioPlay.play();
};

// function recall(){
//   var audioPlay = new Audio ("sounds/" + gamePattern.length + ".mp3");
//   audioPlay.play();
//
//   $("#"+ gamePattern.length-1).addClass("pressed");
//     setTimeout(function() {
//       $("#"+ gamePattern.length-1).removeClass("pressed");
//     }, 100);
// }

function playSound(name){
  var audioPlay = new Audio("sounds/" + userClickedPattern[userClickedPattern.length-1]+ ".mp3");
  audioPlay.play();
}

function animateButton(){
  $("#"+ userClickedPattern[userClickedPattern.length-1]).addClass("pressed");
    setTimeout(function() {
      $("#"+ userClickedPattern[userClickedPattern.length-1]).removeClass("pressed");
    }, 100);
};
// nextSequence();
