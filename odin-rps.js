'use strict'


let bttn = document.querySelectorAll('.jkp');
bttn.addEventListener('click', playRound);

let judgement = document.querySelector('.announcer');
let hmnCount = document.querySelector('.player');
let cpuCount = document.querySelector('.cpu');


function getHumanChoice(bttn) {
    if (bttn.id === 'rock') {
        return 'Rock';
    } else if (bttn.id === 'paper') {
        return 'Paper'
    } else if (bttn.id === 'scissors') {
        return 'Scissors'
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
    
    if (humanChoice === computerChoice) {
        judgement.textContent('Draw. Replay round');
        return;
    }

    if (
        (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
        (humanChoice === 'Paper' && computerChoice === 'Rock') ||
        (humanChoice === 'Scissors' && computerChoice === 'Paper') 
    ) {
        judgement.textContent(`You win! ${humanChoice} beats ${computerChoice}.`);
        return humanChoice;
    } else {
        judgement.textContent(`You lose. ${computerChoice} beats ${humanChoice}`);
        return computerChoice;
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    judgement.textContent('Game Start!');

   while( playerScore || computerScore > 5){
        let playerOption = getHumanChoice();
        let computerOption = getComputerChoice();

        let result = playRound(playerOption, computerOption);

        if (result === playerOption) {
            playerScore+= ;

        } else if (result === computerOption) {
            computerScore+= ;
        }
    }

    judgement.textContent('GAME OVER');
    if (playerScore = 5) {
        judgement.textContent('You Win!');
    } else if (computerScore = 5) {
        judgement.textContent('You lose!')
    }
}










