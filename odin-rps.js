'use strict'

function getHumanChoice() {
    let hI = prompt('Jan!Ken!Pon!','');

    if (hI === null) {
        return undefined;
    }

    let huIN = hI.toLowerCase();

    if(huIN === 'rock') {
        return 'Rock';
    } else if (huIN === 'paper') {
        return 'Paper';
    } else if (huIN === 'scissors') {
        return 'Scissors';
    } else {
        console.log('Going to need a Rock, Paper, or Scissors big dog.')
        return undefined;
    }
}

function getComputerChoice() {
    let comp = Math.floor(Math.random() * 3) + 1;

    switch(comp) {
        case 1:
            return 'Rock';
        case 2:
            return 'Scissors';
        case 3:
            return 'Paper';

    }
}



function playRound(humanChoice, computerChoice) {
    if (!humanChoice) {
        console.log('Now you see that\'s\ wrong stupid. Start over.');
        return;
    }
    
    if (humanChoice === computerChoice) {
        console.log('Draw. You might be a clanker so I need you to try again.');
        return;
    }


    if (
        (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
        (humanChoice === 'Paper' && computerChoice === 'Rock') ||
        (humanChoice === 'Scissors' && computerChoice === 'Paper') 
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        return humanChoice;
    } else {
        console.log(`You lose. ${computerChoice} beats ${humanChoice}`);
        return computerChoice;
    }
}

function playGame() {
    let rdCount = 0;
    let playerScore = 0;
    let computerScore = 0;

    console.log('Game Start!');

    while (rdCount < 5) {
        let playerOption = getHumanChoice();
        let computerOption = getComputerChoice();

        let result = playRound(playerOption, computerOption);

        if (result === playerOption) {
            playerScore++;
            rdCount++;
        } else if (result === computerOption) {
            computerScore++;
            rdCount++;
        }
    }

    console.log('GAME OVER');
    if (playerScore > computerScore) {
        console.log('You Win!');
    } else {
        console.log('You lose!')
    }
}










