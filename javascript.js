function computerPlay() {
    possibility();

    return possibility();
}

//--------------------------------------------------

function possibility() {
    let randomNum = Math.floor(Math.random()*3 + 1);
    let fig = '';

    if (randomNum == 1) {
        fig = 'rock';
    } else if (randomNum == 2) {
        fig = 'paper';
    } else {
        fig = 'scisors';
    }
    return fig;


    
}
//----------------------------------------------------



