'use strict'


let buttons = document.querySelectorAll('.jkp');
let judgement = document.querySelector('.announcer');
let hmnCount = document.querySelector('#player2');
let cpuCount = document.querySelector('#cpu2');

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
 button.addEventListener('click', () => {
    if (playerScore >= 5 || computerScore >= 5) return;

    let playerSelection = button.id;
    let computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);
   })   
})

function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    let randIndex = Math.floor(Math.random() * 3);
    return choices[randIndex];
}

function playRound(playerChoice, computerChoice) {

    let human = playerChoice.toLowerCase();
    let computer = computerChoice.toLowerCase();

    if (human === computer) {
        judgement.textContent = `It's a draw! Both chose ${human}.`;
    } else if (
        (human === 'rock' && computer === 'scissors') || 
        (human === 'paper' && computer === 'rock') ||
        (human === 'scissors' && computer === 'paper')
    ){
        playerScore++;
        judgement.textContent = `You win this round! ${human} beats ${computer}.`;
    } else {
        computerScore++;
        judgement.textContent = `You lose this round! ${computer} beats ${human}.`;
    }

    updateScoreboard();
    checkWinner();
}

function updateScoreboard() {
    hmnCount.textContent = playerScore;
    cpuCount.textContent = computerScore;
}

function checkWinner() {
    if (playerScore === 5) {
        judgement.textContent = 'GAME OVER: A champion has been crowned!';
        disableButtons();
    } else if (computerScore === 5) {
        judgement.textContent = 'GAME OVER: CPU takes the house.';
        disableButtons();
    }
}

function disableButtons() {
    buttons.forEach(btn => btn.disabled = true);
}












