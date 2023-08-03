// options for computer
let options = ["✊", "✋", "✌"];

// variables for player and computer choice
let playerChoice;
let computerChoice;

// scores
let playerScore = 0;
let computerScore = 0;

// function to get computer choice
function computerPlay() {
    computerChoice = options[Math.floor(Math.random() * 3)];
    return computerChoice;
}

// function to play a round
function playRound(playerSelection, computerSelection) {
    playerChoice = playerSelection;
    computerChoice = computerSelection;
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (playerChoice === "✊" && computerChoice === "✋") {
        computerScore++;
        return "You lose! Paper beats rock!";
    } else if (playerChoice === "✊" && computerChoice === "✌") {
        playerScore++;
        return "You win! Rock beats scissors!";
    } else if (playerChoice === "✋" && computerChoice === "✊") {
        playerScore++;
        return "You win! Paper beats rock!";
    } else if (playerChoice === "✋" && computerChoice === "✌") {
        computerScore++;
        return "You lose! Scissors beats paper!";
    } else if (playerChoice === "✌" && computerChoice === "✊") {
        computerScore++;
        return "You lose! Rock beats scissors!";
    } else if (playerChoice === "✌" && computerChoice === "✋") {
        playerScore++;
        return "You win! Scissors beats paper!";
    }
}

// function to update the UI with the result
function updateUI(result, playerSelection, computerSelection) {
    const playerChoiceDiv = document.getElementById("playerChoice");
    const computerChoiceDiv = document.getElementById("computerChoice");
    const currRound = document.getElementById("currRound");
    const playerScoreDiv = document.getElementById("playerScore");
    const computerScoreDiv = document.getElementById("computerScore");

    playerChoiceDiv.innerText = playerSelection;
    computerChoiceDiv.innerText = computerSelection;
    currRound.innerText = result;
    playerScoreDiv.innerText = playerScore;
    computerScoreDiv.innerText = computerScore;

    if (playerScore === 5 || computerScore === 5) {
        const finalResult = playerScore === 5 ? "You win the game!" : "Computer wins the game!";
        const finalDiv = document.querySelector(".final");
        finalDiv.innerText = finalResult;
        buttons.forEach((button) => {
            button.removeEventListener('click', playRoundOnClick);
        });
    }
}

// function to play a round when a button is clicked
function playRoundOnClick(event) {
    const playerSelection = event.target.innerText;
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    updateUI(result, playerSelection, computerSelection);
}

// add event listeners to buttons
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', playRoundOnClick);
});

// function to reset the game
function reset() {
    playerScore = 0;
    computerScore = 0;
    const finalDiv = document.querySelector(".final");
    finalDiv.innerText = "";

    buttons.forEach((button) => {
        button.addEventListener('click', playRoundOnClick);
    });

    updateUI("", "", "");
}
