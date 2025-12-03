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