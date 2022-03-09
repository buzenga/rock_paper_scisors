

function singleGame(playerSelection,computerSelection){
    
// Getting intput and changing the input to CAPITAL LETTERS
    do {
        playerSelection = prompt("Choose between: rock, paper, scisors.");  
        playerSelection = playerSelection.toUpperCase();
    } while ( (playerSelection != "ROCK") && (playerSelection != 'PAPER'))
       
    
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