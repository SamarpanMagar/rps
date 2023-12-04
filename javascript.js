// Button selector and quiries
let buttons = document.querySelectorAll('button');
for (button of buttons) {
    button.addEventListener("click", game);
}

// Initialize game
let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

// Game start
function game (event) {
    let playerChoice = getPlayerChoice(event)
    let computerChoice = getComputerChoice();
    let result = compareChoices(playerChoice, computerChoice);
    updateScore(result);
    getGameStatus(playerChoice, computerChoice, result);
    getGameTotalStatus();
}

// Get player choice
function getPlayerChoice (event) {
return event.target.textContent.toLowerCase();
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

// Text DOM selector and queries
let movesPlayed = document.querySelector('.movesPlayed');
let gameResult = document.querySelector('.gameResult');
let gameScore = document.querySelector('.gameScore');
let gameTotalResult = document.querySelector('.gameTotalResult');

// Get game status and scores
function getGameStatus (playerChoice, computerChoice, result) {
    movesPlayed.textContent = (`You played ${playerChoice} and computer played ${computerChoice}.`);
    if (result == 'tie') {
        gameResult.textContent = ('It was a tie.');
    }
    else {
        gameResult.textContent = (`Round won by ${result}`);
    }
        gameScore.textContent = (`Player score: ${playerScore} --- Computer score: ${computerScore}
    `);
}

// Check if rounds played is 5 
function getGameTotalStatus () {
    roundsPlayed++;
    if (roundsPlayed >= 5) {
        getGameWinner();
    }
}

// Get game winner
function getGameWinner () {
    if (playerScore == computerScore) {
        gameTotalResult.textContent = (`It was a tie, can you believe it?`);
    }
    else if (playerScore > computerScore) {
        gameTotalResult.textContent = (`Player won the game.`)
    }
    else {
        gameTotalResult.textContent = (`Computer won the game.`)
    }
    removeEvent();
}

function removeEvent () {
    // Remove button events 
      for (button of buttons) {
        button.removeEventListener("click", game);
    }
}


