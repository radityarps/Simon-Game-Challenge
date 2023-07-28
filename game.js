// Game Path
var userClickedPattern = [];
var gamePattern = [];

//Start The Game
var started = false;
var level = 0;
$(document).on("keydown", function () {
  if (started === false) {
    nextSequence();
    $("#level-title").text("Level " + level);
    started = true;
  }
});

//Clicked Button
$(".btn").on("click", function () {
  var userChosenColor = this.id;
  userClickedPattern.push(userChosenColor);
  $("#" + userChosenColor).addClass("pressed");
  setTimeout(function () {
    $("#" + userChosenColor).removeClass("pressed");
  }, 200);
  whatSound(userChosenColor);
  checkPattern(userClickedPattern.length - 1);
});

//Game system
function checkPattern(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    const wrongSound = new Audio("./sounds/wrong.mp3");
    wrongSound.play();
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text(
      "GameOver at level " + level + ", Press Any Key to Restart"
    );
    level = 0;
    started = false;
    gamePattern = [];
    userClickedPattern = [];
  }
}

//Random Pick Color
var buttonColors = ["red", "blue", "green", "yellow"];
function nextSequence() {
  userClickedPattern = [];
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100);
  whatSound(randomChosenColor);
  level++;
  $("#level-title").text("Level " + level);
}

//Sound List
function whatSound(whatColor) {
  switch (whatColor) {
    case "red":
      const redColor = new Audio("./sounds/red.mp3");
      redColor.play();
      break;
    case "green":
      const greenColor = new Audio("./sounds/green.mp3");
      greenColor.play();
      break;
    case "blue":
      const blueColor = new Audio("./sounds/blue.mp3");
      blueColor.play();
      break;
    case "yellow":
      const yellowColor = new Audio("./sounds/yellow.mp3");
      yellowColor.play();
      break;
    default:
      break;
  }
}
