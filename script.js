document.addEventListener("DOMContentLoaded", function () {
    console.log("Hello World!");

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
        console.log("CompChoice");
        computerChoice = options[Math.floor(Math.random() * 3)];
        return computerChoice;
    }

    // function to play a round
    function playRound(playerSelection, computerSelection) {
        playerChoice = playerSelection;
        computerChoice = computerSelection;
        if (playerChoice === computerChoice) {
            return "It's a tie!";
        }
        if (playerChoice === "✊") {
            if (computerChoice === "✋") {
                computerScore++;
                return "You lose! Paper beats rock!";
            } else {
                playerScore++;
                return "You win! Rock beats scissors!";
            }
        }
        if (playerChoice === "✋") {
            if (computerChoice === "✌") {
                computerScore++;
                return "You lose! Scissors beats paper!";
            } else {
                playerScore++;
                return "You win! Paper beats rock!";
            }
        }
        if (playerChoice === "✌") {
            if (computerChoice === "✊") {
                computerScore++;
                return "You lose! Rock beats scissors!";
            } else {
                playerScore++;
                return "You win! Scissors beats paper!";
            }
        }
        console.log("PlauRound");
    }

    // function to update the UI with the result
    function updateUI(result, playerSelection, computerSelection, playerScore, computerScore) {
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
        console.log("UpdateUI");

        if (playerScore === 5 || computerScore === 5) {
            const finalResult = playerScore === 5 ? "You win the game!" : "Computer wins the game!";
            const finalDiv = document.querySelector(".final");
            finalDiv.innerText = finalResult;
            buttons.forEach((button) => {
                button.removeEventListener('click', playRoundOnClick);
            });
        }
    }

    // add event listeners to buttons
    const stoneButton = document.getElementById('Stone');
    const paperButton = document.getElementById('Paper');
    const scissorButton = document.getElementById('Scissor');
    const res = document.getElementById('reset');

    stoneButton.addEventListener('click', playRoundOnClick);
    paperButton.addEventListener('click', playRoundOnClick);
    scissorButton.addEventListener('click', playRoundOnClick);
    res.addEventListener('click', reset);

    // function to play a round when a button is clicked
    function playRoundOnClick(event) {
        const playerSelection = event.target.innerText;
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);
        updateUI(result, playerSelection, computerSelection, playerScore, computerScore);
    }

    // function to reset the game
    function reset() {
        playerScore = 0;
        computerScore = 0;
        const finalDiv = document.querySelector(".final");
        finalDiv.innerText = "";

        buttons.forEach((button) => {
            button.addEventListener('click', playRoundOnClick);
        });

        updateUI("🍆", "🍆", "🍆", 0, 0);
    }

    // Define the buttons variable here so that it's accessible throughout the script
    const buttons = document.querySelectorAll('button');


    console.log("Hello World!!!!!!!!!!!!!!!!!");
});