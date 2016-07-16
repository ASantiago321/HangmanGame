$(document).ready(function(){
    
	// Generate a random number
    var random = Math.floor(Math.random() * 26) + 65;
    var wins = 0;
    var losses = 0;
    var guessPerGame = 8;
    var guessesLeft = guessPerGame;
    var guessesSoFar = 0;
    var note = "Guess a letter";

    function resetGame(){
    	guessesLeft = guessPerGame;
    	random = Math.floor(Math.random() * 26) + 65; 
    	//guessesSoFar = 0;
    }

    function updateBoard(){
    	$('#note').html(note);
    	$('#numberOfWins').html(wins);
    	$('#numberOfLosses').html(losses);
    	$('#guessesLeft').html(guessesLeft);
    	$('#guessesSoFar').html(guessesSoFar);

    }
    
    updateBoard();

    $(document).keyup(function(event){
    	var letter = String.fromCharCode(event.which);
    	note = "Guess Again!"

    	if (event.which == random){
    		wins++;
    		note = "You Win!"
    		resetGame();
    	} else { 
    		guessesSoFar++;
    		guessesLeft--;
    		if (guessesLeft <= 0){
    			losses++;
    			note = "You lose sucker!"
    			resetGame();
    		}

    	}
        
        updateBoard();

        //$('#randomNumber').html(event.which + ": " + random);
    });

})

