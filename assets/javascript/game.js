//initialize game
var wins = 0;
var losses = 0;

// function starts game
function playGame() {


//reset user guess
var userGuess = "";

//reset guesses left
var guessesLeft =[1, 2, 3, 4, 5, 6, 7, 8, 9]

// generate random number
var randomNumber = Math.floor(Math.random() * 25);

// computer generates # 0-25 number gets converted to string a-z 

var alphabet = "abcdefghijklmnopqrstuvwxyz";

var randomLetter = alphabet.charAt(randomNumber);

// user types a letter and it creates text on page
var userInput = prompt('guess a letter');

// this letter is saved as a variable and saved as lower case

var userGuess = userInput.toLowerCase();

document.getElementById("userinput").innerHTML = userGuess;

// there is a for loop that loops through 9 times OR until correct guess
// each time it loops through, the number of guesses left decreases

// if user guess === computer letter then add 1 to wins
if (userGuess === randomLetter) {
    wins++
} 

// if user guess is wrong, add 1 to losses
else {
    losses++
}

// the loop ends and the game resets 

// for test run - end loop and ask if you want to play again
    var keepPlaying = confirm('want to keep playing?');

    if (keepPlaying === true) {
        playGame();
    }
//guesses reset
// guesses left resets
//wins and losses do NOT reset


console.log('random number ' + randomNumber);
console.log('alphabet: ' + alphabet);
console.log('random letter: ' + randomLetter);
console.log('the user guesses: ' + userGuess);
console.log('wins: ' + wins);
console.log('losses: ' + losses);
//console.log('guesses left: ' + guessesLeft);
console.log('keep playing: ' + keepPlaying);
}

playGame();

if (playGame) {
    document.getElementById('win').textContent = wins;
    document.getElementById('loss').textContent = losses;
}