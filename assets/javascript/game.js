var winCounter = 0;
var lossCounter = 0;
var remainingGuesses = 10;
var arrGuesses = [];
var lastGuess;
var correctAnswer = randomLetter();

window.onload = function reload() {
     //when the document is finished loading, set the counters to 
  document.getElementById("winsOutput").innerHTML=winCounter;
  document.getElementById("lossesOutput").innerHTML=lossCounter;
  document.getElementById("remainingOutput").innerHTML=remainingGuesses;
}

//sets a random letter to correctAnswer
function randomLetter() {
  var chars = "abcdefghijklmnopqrstuvwxyz";
  return chars.substr(Math.floor(Math.random() * 26), 1);
}   //closes the randomLetter function

//takes key presses and sets it to lastGuess variable
document.onkeyup = function(event) {
  var lastGuess = String.fromCharCode(event.keyCode).toLowerCase();
  if (event.which <= 90 && event.which >= 65) {
    if (arrGuesses.indexOf(lastGuess) == -1) {
       // Captures the key press, converts it to lowercase, and saves it to a variable.

//reset will clear guesses, reset remaining guesses, and reassign the correct answer.
    function reset() {
      remainingGuesses = 10;
      arrGuesses = [];
      correctAnswer = randomLetter();
    }

//playGame keeps the game running after a win or loss

    function playGame() {
      randomLetter();
        if (lastGuess==correctAnswer) {
          winCounter++;
          alert("Congratulations! You guessed the letter!");
          reset()
        }   //closes the if statement of the Guess - If Statement
        else {
          remainingGuesses--;
          arrGuesses.push(lastGuess);
        }    //closes the else statement to the Guess - If Statement

    //Complete Loss Section - tells user what answer was, adds 1 to the loss counter and soft resets the game
        if (remainingGuesses===0) {
          alert("I'm sorry. You did not get the correct answer this time. The correct answer was " + correctAnswer + ". Try again!");
          lossCounter++;
          reset()
        }
      }
    playGame();
    }
  }
  document.getElementById("winsOutput").innerHTML=winCounter;
  document.getElementById("lossesOutput").innerHTML=lossCounter;
  document.getElementById("remainingOutput").innerHTML=remainingGuesses;
  document.getElementById("guessesOutput").innerHTML=arrGuesses;
}   //closes the document.onkeyup function
