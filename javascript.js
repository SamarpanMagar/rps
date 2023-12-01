// Initialize game
let playerScore = 0;
let computerScore = 0;

// Game start
function game () {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    let result = compareChoices(playerChoice, computerChoice);
    updateScore(result);
    getGameStatus(playerChoice, computerChoice, result);
}

// Get player choice
function getPlayerChoice () {
    return (prompt("Play a choice: ").trim()).toLowerCase();
}

// Get computer choice
function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        return 'rock';
    }
    else if (randomNumber == 1) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

// Compare choices
function compareChoices (playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        return 'tie';
    }

    switch (playerChoice) {
        case 'rock':
            if (computerChoice == 'paper') {
                return 'computer'
            }
            return 'player';
        case 'paper': 
            if (computerChoice == 'scissors') {
                return 'computer'
            }
            return 'player';
        case 'scissors':
            if (computerChoice == 'rock') {
                return 'computer'
            }
            return 'player';
    }
}

// Update score
function updateScore (result) {
    switch (result) {
        case 'tie': return;
        case 'player': playerScore++;
                        break;
        case 'computer': computerScore++;
                        break;
    }
}

// Get game status and scores
function getGameStatus (playerChoice, computerChoice, result) {
    console.log(`You played ${playerChoice} and computer played ${computerChoice}.`);
    if (result == 'tie') {
        console.log('It was a tie.');
    }
    else {
        console.log(`Round won by ${result}`);
    }
    console.log(`Player score: ${playerScore} --- Computer score: ${computerScore}
    `);
}

// Repeat until game ends
for (let i = 0; i < 5; i++) {
    game();
}

getGameWinner();

function getGameWinner () {
    if (playerScore == computerScore) {
        console.log(`It was a tie, can you believe it?`);
    }
    else if (playerScore > computerScore) {
        console.log(`Player won the game.`)
    }
    else {
        console.log(`Computer won the game.`)
    }
}


