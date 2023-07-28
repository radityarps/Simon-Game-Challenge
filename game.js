// Game Path
const gamePattern = [];
//Random Pick Color
var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).addClass("pressed");
  setTimeout(function () {
    $("#" + randomChosenColor).removeClass("pressed");
  }, 250);
  whatSound(randomChosenColor);
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
    case "wrong":
      const wrongSound = new Audio("./sounds/wrong.mp3");
      wrongSound.play();
      break;
    default:
      break;
  }
}
