'use strict';

			// set number of guesees
			var guessesRemaining = 10;
						
			// empty array of letters guessed
			var lettersGuessed = [];
			
			// library of words
			var words = [
				{
					word: "ALPHA",
					sound: "sound.mp4",
					image: "image.jpg"
				},
				{
					word: "BRAVO",
					sound: "sound.mp4",
					image: "image.jpg"
				},
				{
					word: "CHARLIE",
					sound: "sound.mp4",
					image: "image.jpg"
				},
				{
					word: "DELTA",
					sound: "sound.mp4",
					image: "image.jpg"
				},
				{
					word: "ECHO",
					sound: "sound.mp4",
					image: "image.jpg"
				},
				{
					word: "FOXTROT",
					sound: "sound.mp4",
					image: "image.jpg"
				},
				{
					word: "GOLF",
					sound: "sound.mp4",
					image: "image.jpg"
				},
				{
					word: "HILO",
					sound: "sound.mp4",
					image: "image.jpg"
				},
			]

			var chosenWord = [];
			var emptyArray = []

			function startGame(){

				// clear old word
				document.getElementById("demo").innerHTML = ' ';

				// Display remaining number of guesses
				document.getElementById("game").innerHTML = guessesRemaining


				// choose random word from array of words
				var chosenWord = words[Math.floor(Math.random() * words.length)];
				console.log(chosenWord.word);
			
				
				// create empty array for the chosen word and display it
				for (var j=0; j< chosenWord.word.length; j++){
					emptyArray.push('_');
					document.getElementById("demo").innerHTML = emptyArray;
				}
				

				// This function is run whenever the user presses a key.
    			document.onkeyup = function(event) {

      				// Determines which key was pressed.
      				var userGuess = event.key;
      				lettersGuessed.push(userGuess);

      				

      				// loop through each letter in chosen word to see if it matches the user guess
      				for (var i=0; i < chosenWord.word.length; i++){

      					// check if userGuess is same as letter in array
      					if(userGuess === chosenWord.word[i].toLowerCase()){
      						
      						emptyArray.splice(chosenWord.word[i], 1, userGuess.toUpperCase());
							document.getElementById("demo").innerHTML = emptyArray;
      					} else{

      					}
					}



					if(guessesRemaining === "0"){
						// end game
					} 

					// Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        			var html =
        			  "<p>You chose: " + lettersGuessed + "</p>" +
        			  "<p>Remaining Guesses: " + guessesRemaining + "</p>";
			
        			// Set the inner HTML contents of the #game div to our html string
        			document.querySelector("#game").innerHTML = html;
				}
			}


			// For each chosenWord loop through and create another array emptyArray with dashes.
			// when user selects letter in choseWord replace that index in emptyArray with the letter

			

