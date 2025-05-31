function getComputerChoice() {
    let rock = 'rock';
    let paper = 'paper';
    let scissors = 'scissors';

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    let randomizer = getRandomInt(3);

    if (randomizer === 0) {
        return rock;
    }
    if (randomizer === 1) {
        return paper;
    }
    if (randomizer === 2) {
        return scissors;
    }
}

function getHumanChoice() {
    return prompt("Enter one of the following choices: rock, paper, or scissors", '');
}

let humanScore = 0;

let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if (humanChoice.toLowerCase() === 'rock') {
        if(computerChoice === 'rock') {
            console.log("DRAW!");
        }
        if(computerChoice === 'paper') {
            console.log("You lose! Paper beats Rock");
            computerScore++;
        }
        if(computerChoice === 'scissors') {
            console.log("You win! Rock beats Scissors");
            humanScore++;
        }
    }

    if (humanChoice.toLowerCase() === 'paper') {
        if(computerChoice === 'paper') {
            console.log("DRAW!");
        }
        if(computerChoice === 'scissors') {
            console.log("You lose! Scissors beats Paper");
            computerScore++;
        }
        if(computerChoice === 'rock') {
            console.log("You win! Paper beats Rock");
            humanScore++;
        }
    }

    if (humanChoice.toLowerCase() === 'scissors') {
        if(computerChoice === 'scissors') {
            console.log("DRAW!");
        }
        if(computerChoice === 'rock') {
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        }
        if(computerChoice === 'paper') {
            console.log("You win! Scissors beats Rock");
            humanScore++;
        }
    }
}

const humanSelection = getHumanChoice();

const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);