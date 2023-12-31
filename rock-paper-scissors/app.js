var USER_CHOICE = null;
var COMPUTER_CHOICE = null;
var ALL_GAME_VARIANTS = ['rock', 'paper', 'scissors'];
document.addEventListener('DOMContentLoaded', () => initGameScript());
function initGameScript() {
	var computerChoice = document.getElementById('computer-choice');
	var userChoice = document.getElementById('user-choice');
	var resultDisplay = document.getElementById('result');

	var possibleChoices = document.querySelectorAll('button.game__button');
	for (possibleChoice of possibleChoices) {
		possibleChoice.addEventListener('click', (event) => {
			USER_CHOICE = event.target.id;
			userChoice.innerHTML = USER_CHOICE;
			var computerTargetNum = generateComputerChoice(possibleChoices.length);
			computerChoice.innerHTML = computerTargetNum;
			COMPUTER_CHOICE = computerTargetNum;
			var result = compareAnswers(USER_CHOICE, COMPUTER_CHOICE);
            resultDisplay.innerHTML = result
        });
	}
}
function generateComputerChoice(possibleChoices) {
	var randomNum = Math.floor(Math.random() * possibleChoices);
	return ALL_GAME_VARIANTS[randomNum];
}
function compareAnswers(userChoice, computerChoice) {
	if (userChoice === computerChoice) {
		return 'draw';
	} else if (userChoice === 'rock' && computerChoice === 'scissors') {
		return 'user win!';
	} else if (userChoice === 'rock' && computerChoice === 'paper') {
		return 'computer win';
	} else if (userChoice === 'paper' && computerChoice === 'rock') {
		return 'user win!';
	} else if (userChoice === 'paper' && computerChoice === 'scissors') {
		return 'computer win';
	} else if (userChoice === 'scissors' && computerChoice === 'paper') {
		return 'user win!';
	} else if (userChoice === 'scissors' && computerChoice === 'rock') {
		return 'computer win';
	} else {
		// Fallback for any other invalid inputs
		return 'Invalid input';
	}
}
