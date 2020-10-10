// Variables
let playerChoice, computerChoice, playerScore, computerScore, rounds;
const playerOptions = document.querySelectorAll('.player-choices a');

// Display Elements
const displayHeaderh1 = document.querySelectorAll('.display-header h1');
const displayHeader = displayHeaderh1[0];
const displayText = displayHeaderh1[1];
const displayPlayerScore = document.getElementById('player-score');
const displayComputerScore = document.getElementById('computer-score');

// Text
const initialText = 'Start a New Game!';
const defaultText = 'Select your choice...';

// Controls selector
const mano_tu_e = document.querySelector('#mano-tu-e');

// Audios
const audio = new Audio('audios/mano-tu-é-gay.mp3');


mano_tu_e.addEventListener('click', () => {
    audio.play();
 });

const writeInScreen = function(element, string) {
    element.innerHTML = string;
};

playerOptions.forEach(choice => {
    choice.addEventListener('click', () => {
        if(choice.classList.contains('enabled')) {
            playerChoice = choice.id;
            gameController(playerChoice);
        }
    });
});