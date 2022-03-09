


//Final function tu run the game
function game() {
    alert("You're about to face a well-know rock-paper-scisors player. It is going to take at least 5 rounds. Accurately as many as it requires for one of you to gain five point. Good luck.");
    
    let computerPoints = 0;
    let playerPoints = 0;

    while (computerPoints < 5 && playerPoints < 5) {
        let roundResult = singleGame();
        
        computerPoints += roundResult[0];
        playerPoints += roundResult[1];

        console.log("Score: " + computerPoints + " - " + playerPoints);
    }
    if (computerPoints == 5) {
        console.log("Computer has won");
        alert("Computer has won");
    } else {
        console.log("You've defeated a machine!!! Congrats");
        alert("You've defeated a machine!!! Congrats");
    }

}


//function that allows to play a single round of the game

function singleGame(playerSelection,computerSelection){
    
     computerSelection = computerPlay();
// Getting intput and changing the input to CAPITAL LETTERS
    do {
        playerSelection = prompt("Choose between: rock, paper, scisors.");  
        playerSelection = playerSelection.toUpperCase();
    } while ( (playerSelection != "ROCK") && (playerSelection != 'PAPER') && (playerSelection != "SCISORS"))

//Variables to count the score of player and computer

    let computerScore = 0;
    let playerScore = 0;

//Display of the chosen figure

    console.log("Computer -> " + computerSelection + " | " + playerSelection + " <- You");

//All the possible situations in the game + point additions

    if (playerSelection == 'ROCK' && computerSelection == 'ROCK') {
        console.log("It is a draw");
    }  else if (playerSelection == 'ROCK' && computerSelection == 'PAPER') {
        console.log("You lost. +1 for the computer");
        computerScore +=1;
    } else if (playerSelection == 'ROCK' && computerSelection == 'SCISORS') {
        console.log("Congrats, You won!!! +1 for you");
        playerScore +=1;
    } else if (playerSelection == 'PAPER' && computerSelection == 'ROCK') {
        console.log("Paper beats rock. You won!");
        playerScore +=1;
    } else if (playerSelection == 'PAPER' && computerSelection =='PAPER') {
        console.log("Bot chose paper. It's a draw");
    } else if (playerSelection == 'PAPER' && computerSelection == 'SCISORS') {
        console.log("Scissors cut paper. You lost");
        computerScore += 1;
    } else if (playerSelection == 'SCISORS' && computerSelection == 'ROCK') {
        console.log("Rock is harder. You lost");
        computerScore += 1;
    } else if (playerSelection == 'SCISORS' && computerSelection == 'PAPER') {
        console.log("You've cut it. Congrats");
        playerScore += 1;
    } else if (playerSelection == 'SCISORS' && computerSelection == 'SCISORS') {
        console.log("Tie!");
    } else {
        console.log("IDK what have you chosen");
    }

//Returing the point score of player after a single round
    let score = [computerScore,playerScore];

        return score;    
}


//.....Function allowing to randomly get a figure........

function computerPlay() {

    let randomNum = Math.floor(Math.random()*3+1);
    
    let fig = '';

    if (randomNum == 1){
        fig = 'ROCK';
    } else if (randomNum == 2) {
        fig = 'PAPER';
    } else {
        fig = 'SCISORS';
    }

    return fig;
}