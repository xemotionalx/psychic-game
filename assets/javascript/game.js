//initialize game
var wins = 0;
var losses = 0;
guessesLeft = 9;

// pressing a key starts the game
document.onkeyup = function playGame() {

    //the pressed key = guess: is stored in variable & shows up on screen
    var userGuess = event.key;
    
    document.getElementById("userinput").innerHTML = userGuess;
    
    //computer generates random # 0-25; number gets converted to string a-z
    var randomNumber = Math.floor(Math.random() * 25);
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var randomLetter = alphabet.charAt(randomNumber);

   //if guesses > 0, & the user gets it right the guesses reset to 9 and wins increase
   //if guesses > 0, & the user gets it wrong the # of guesses remaining go down 1
   //if guesses go down to 0, losses go up 1 and guesses reset to 9
    if (userGuess === randomLetter && guessesLeft > 0) {
        wins++;
        guessesLeft = 9;
    } else if  (userGuess !== randomLetter && guessesLeft > 0) {
        guessesLeft--;
    } else if (guessesLeft === 0) {
        losses++;
        guessesLeft = 9;
    } 

    document.getElementById('win').textContent = wins;
    document.getElementById('loss').textContent = losses;
    document.getElementById('guesses-left').textContent = guessesLeft;
    
     
    //guesses reset
    // guesses left resets
    //wins and losses do NOT reset


    console.log('random number ' + randomNumber);
    console.log('alphabet: ' + alphabet);
    console.log('random letter: ' + randomLetter);
    console.log('the user guesses: ' + userGuess);
    console.log('wins: ' + wins);
    console.log('losses: ' + losses);
    console.log('guesses left: ' + guessesLeft);
    
}

