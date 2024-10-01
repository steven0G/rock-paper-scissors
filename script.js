function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "rock";
    }
    else if (choice == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Choose(Rock,Paper,Scissors)").toLowerCase();
    if (choice == "rock") {
        return "rock";
    }
    else if (choice == "paper") {
        return "paper";
    }
    else if (choice == "scissors") {
        return "scissors";
    }
    
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanScore == 5 || computerScore == 5) {
        return;
    }
    if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")) {
        div.textContent = `You won! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    }
    else if ((humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "rock")) {
        div.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    }
    else if (humanChoice == computerChoice) {
        div.textContent = "It's a tie!";
    }
}


const buttons = document.querySelectorAll("button");
const div = document.querySelector("#result");
const displayHumanScore = document.querySelector("#humanScore");
const displayCompScore = document.querySelector("#computerScore");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const computerSelection = getComputerChoice();
        playRound(button.id, computerSelection);
        displayHumanScore.textContent = `Your Score: ${humanScore}`;
        displayCompScore.textContent = `Computer Score: ${computerScore}`;
        
        if (humanScore == 5) {
            div.textContent = "Game Over! Player won!";
        }
        else if (computerScore == 5) {
            div.textContent = "Game Over! Computer won!";
        }

    });
});