'use strict'

function getHumanChoice() {
    let hI = prompt('Jan!Ken!Pon!','');

    let huIN = hI.toLowerCase();

    if(huIN === 'rock') {
        return 'Rock';
    } else if (huIN === 'paper') {
        return 'Paper';
    } else if (huIN === 'scissors') {
        return 'Scissors';
    } else {
        return undefined;
    }
}

function getComputerChoice() {
    let comp = Math.floor(Math.random() * 3);

    switch(comp) {
        case 0:
            return ('Rock');
            break;
        case 1:
            return ('Scissors');
            break;
        case 2:
            return ('Paper');
            break;



    }
}

function playRound(humanChoice, computerChoice) {
    
    let shoot = humanChoice && computerChoice; 
    let lose1 = humanChoice == 'Rock' && computerChoice == 'Paper';
    let win1 = humanChoice == 'Rock' && computerChoice == 'Scissors';
    let draw1 = humanChoice == 'Rock' && computerChoice == 'Rock';
    let lose2 =  humanChoice == 'Paper' && computerChoice == 'Scissors';
    let win2 = humanChoice == 'Paper' && computerChoice == 'Rock';
    let draw2 = humanChoice == 'Paper' && computerChoice == 'Paper';
    let lose3 = humanChoice == 'Scissors' && computerChoice == 'Rock';
    let win3 = humanChoice == 'Scissors' && computerChoice == 'Paper';
    let draw3 = humanChoice == 'Scissors' && computerChoice == 'Scissors';
     
    switch (shoot) {
        case lose1:
            return console.log('You lose. Paper beats Rock.');
            break;
        case lose2:
            return console.log('You lose. Scissor beats Paper.');
            break;
        case lose3:
            return console.log('You lose. Rock beats Scissors.');
            break;
        case win1:
            return console.log('You win. Rock beats Scissors.');
            break;
        case win2:
            return console.log('You win. Paper beats Rock');
            break;
        case win3:
            return console.log('You win. Scissors beats Paper');
        case draw1:
        case draw2:
        case draw3:
            return console.log('Draw. Try again.');
            break;
    } 
} 

let playerOption = getHumanChoice();
let computerOption = getComputerChoice();
