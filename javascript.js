function fullGame() {
     let score = 0;
     let computerSum = 0;
     let playerSum = 0;

for (i=0; i < 5; i++) {
 
    let result = game();

    //let computerSum = result[0];
    //let playerSum = result[1];

    score += result;
    //result += result;
    
   //score = result;
}
    console.log( "SOmethins here" + score);
}

//----------------------------------
function game() {
    
    
    let computerSelection =computerPlay();
     let a = prompt("Choose between: rock; paper; scisors");
   

    playerSelection = a.toUpperCase();
    
    //counting points
    playerPoints = 0;
    computerPoints = 0;

    console.log("Computer-> " + computerSelection + " : " + playerSelection + " <-You");

    if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        computerPoints += 1;
        console.log("Paper beats rock!!! YOU LOSE!!!");
    } else if (playerSelection == "ROCK" && computerSelection == "SCISORS") {
        playerPoints += 1;
        console.log("Rock beats scisors!!! YOU WIN!!!");
    } else if (playerSelection == "ROCK" && computerSelection == "ROCK") {
        console.log("Draw!!! You both picked ROCK.");
    } else if (playerSelection == "PAPER" && computerSelection == "SCISORS") {
        computerPoints += 1;
        console.log("Scisors beat paper. You lose!!!");
    } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        playerPoints += 1;
        console.log("Paper beats rock. You win!!!");
    } else if (playerSelection == "PAPER" && computerSelection == "PAPER") {
        console.log("Draw!!! You both picked PAPER.");
    } else if (playerSelection == "SCISORS" && computerSelection == "ROCK") {
        computerPoints += 1;
        console.log("Rock beats scisors. You lose!!!");
    } else if (playerSelection == "SCISORS" && computerSelection == "PAPER") {
        playerPoints += 1;
        console.log("Scisors beat paper. You win!!!");
    } else if (playerSelection == "SCISORS" && computerSelection == "SCISORS") {
        console.log("Draw!!! You both picked SCISORS.");
    } else {
        console.log("WTF have you just typed?");
    }

    let c = Number(computerPoints);
    let p = Number(playerPoints);
    
    //let array ={c,p};

    //return array;
    return c;
}
//----------------------------

function computerPlay() {
    possibility();

    return possibility();
}

//--------------------------------------------------

function possibility() {
    let randomNum = Math.floor(Math.random()*3 + 1);
    let fig = '';

    if (randomNum == 1) {
        fig = 'ROCK';
    } else if (randomNum == 2) {
        fig = 'PAPER';
    } else {
        fig = 'SCISORS';
    }
    return fig;


    
}
//----------------------------------------------------



