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
    else {
        alert("Invalid Choice!");
        return getHumanChoice();
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if ((humanChoice == "rock" && computerChoice == "scissors") || (humanChoice == "paper" && computerChoice == "rock") || (humanChoice == "scissors" && computerChoice == "paper")) {
        humanScore++;
        alert(`You won! ${humanChoice} beats ${computerChoice}.`);
    }
    else if ((humanChoice == "rock" && computerChoice == "paper") || (humanChoice == "paper" && computerChoice == "scissors") || (humanChoice == "scissors" && computerChoice == "rock")) {
        computerScore++;
        alert(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }
    else if (humanChoice == computerChoice) {
        alert("It's a tie!");
    }
}



function playGame() {
    rounds = 0;
    while (rounds < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        if (humanScore == 3) {
            alert(`Congrats! you won. You won ${humanScore} rounds while the computer only won ${computerScore} rounds.`);
            return null;
        }
        else if (computerScore == 3) {
            alert(`Too bad! you lose. You  only won ${humanScore} rounds while the computer won ${computerScore} rounds.`);
            return null;
        }
        rounds++
        
    }
    if (humanScore > computerScore) {
        alert(`Congrats! you won. You won ${humanScore} rounds while the computer only won ${computerScore} rounds.`);
    }
    else if (computerScore < humanScore) {
        alert(`Too bad! you lose. You  only won ${humanScore} rounds while the computer won ${computerScore} rounds.`);
    }
    else if (humanScore == computerScore) {
        alert(`It's a tie! you won ${humanScore} rounds while the computer also won ${computerScore} rounds. `);
    }

}
playGame();