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
				{
					word: "JULIET",
					sound: "sound.mp4",
					image: "image.jpg"
				},
			]

			var chosenWord = [];
			var emptyArray = [];
			var noMatch = 0;
			var guessedRightNumb = 0;
			var wins = 0;


			function startGame(){

				var chicken = document.getElementById("chickenHolder");
				chicken.style.display = "none";

				// Set number of guesees
				guessesRemaining = 10;
				lettersGuessed = [];
				emptyArray = [];

				// Display number of guesses at 10
				document.getElementById("game").innerHTML = 
				"<p>Wins:" + wins + "</p>" +
				"<p>You chose: " + lettersGuessed + "</p>" +
        		"<p>Remaining Guesses: " + guessesRemaining + "</p>";


				// choose random word from array of words
				chosenWord = words[Math.floor(Math.random() * words.length)];
				console.log(chosenWord.word);
			
				
				// create empty array for the chosen word and display it as hidden word
				for (var j=0; j< chosenWord.word.length; j++){

					emptyArray.push('_');
					document.getElementById("demo").innerHTML = emptyArray;
				}
				

				// This function is run whenever the user presses a key.
    			document.onkeyup = function(event) {

      				// Determines which key was pressed.
      				var userGuess = event.key;
      				lettersGuessed.push(userGuess);

      				var guessedRight = false;

      				// loop through each letter in chosen word to see if it matches the user guess
      				for (var i=0; i < chosenWord.word.length; i++){

      					// check if userGuess is same as letter in array
      					if(userGuess === chosenWord.word[i].toLowerCase()){
      						
      						// sets guess right to true
      						guessedRight = true;
      						guessedRightNumb++

      						// add matching letters to array
      						emptyArray[i] = userGuess.toUpperCase();
							document.getElementById("demo").innerHTML = emptyArray;

      					}
					}

					// checks to see if guessright is still false, if so guess remaining -1
					if (guessedRight === false){
						guessesRemaining--;
					}

					// update letters guessed, guesses remaining.
        			var html =
        			"<p>Wins:" + wins + "</p>" +
        			"<p>You chose: " + lettersGuessed + "</p>" +
        			"<p>Remaining Guesses: " + guessesRemaining + "</p>";
			
        			// Set the inner HTML contents of the #game div to our html string
        			document.querySelector("#game").innerHTML = html;

					
					// Game Over
					if(guessesRemaining <= "0"){
						gameOver();
						return;
					} 

					// Winning
					if(guessedRightNumb >= emptyArray.length){
						winner();
						return;
					}
				}
			}

			function gameOver() {

				lettersGuessed = [];

				var htmlDemo =
				"<p>Game Over Sucka </p>"

				// Set the inner HTML contents of the #game div to our html string
        		document.querySelector("#demo").innerHTML = htmlDemo;

        		var htmlGame =
        		"<p>You chose: </p>" + "<p>Remaining Guesses: </p>";
			
        		// Set the inner HTML contents of the #game div to our html string
        		document.querySelector("#game").innerHTML = htmlGame;

        		// Play game over sound
         		var audio = new Audio('assets/audio/gameover.wav');
				audio.play();

			}

			function winner(){

				wins++;
				// update letters guessed, guesses remaining.
         		var htmlWinGame = "<p>Wins:" + wins + "</p>";
				
         		// Set the inner HTML contents of the #game div to our html string
         		document.querySelector("#game").innerHTML = htmlWinGame;

         		var htmlWin = "<p>Winner Winner Chicken Dinner!</p>";

			 	// Set the inner HTML contents of the #game div to our html string
         		document.querySelector("#demo").innerHTML = htmlWin;

         		var chicken = document.getElementById("chickenHolder");
				chicken.style.display = "block";

         		// reset number of correct guesses
         		guessedRightNumb = 0;

         		// Play winning sound
         		var audio = new Audio('assets/audio/chicken.wav');
				audio.play();
				
			}


