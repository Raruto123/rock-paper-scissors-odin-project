let humanScoreDisplay = document.getElementById("human-score");
let computerScoreDisplay = document.getElementById("computer-score");
let winner = document.getElementById("winner-annoucement");
let moves = document.querySelector(".moves");
let rockButton = document.querySelector(".rock");
let paperButton = document.querySelector(".paper");
let scissorsButton = document.querySelector(".scissors");
let humanChoiceDisplay = document.querySelector(".humanChoice");
let computerChoiceDisplay = document.querySelector(".computerChoice");





let humanScore = 0;
let computerScore = 0;



function getComputerChoice() {
    let numberReturned = Math.floor(Math.random() * 100);
    let choice = "";
    computerChoiceDisplay.textContent = "";
    if (numberReturned <= 33) {
        choice = "Rock";
        computerChoiceDisplay.textContent = "Rock";
    } else if (numberReturned > 33 && numberReturned <= 66) {
        choice = "Paper";
        computerChoiceDisplay.textContent = "Paper";

    } else if (numberReturned > 66 && numberReturned <= 99) {
        choice = "Scissors";
        computerChoiceDisplay.textContent = "Scissors";

    } else {
        choice  = null;
    }

    return computerChoiceDisplay.textContent;
};

// function getHumanChoice(options) {
//     let inventory = ["Rock", "Paper", "Scissors"];


//     if (options !== null && options.toLowerCase().includes(inventory[0].toLowerCase())) {
//         options = inventory[0];
//     } else if (options !== null && options.toLowerCase().includes(inventory[1].toLowerCase())) {
//         options = inventory[1];
//     } else if (options !== null && options.toLowerCase().includes(inventory[2].toLowerCase())) {
//         options = inventory[2];
//     } else if (options === null){
//         options = "no value chosen";
//     } else {
//         options = "no valid value";
//     }
//     console.log(`PLAYER CHOICE THIS ROUND : ${options}`);


//     console.log("🚀 ~ getHumanChoice ~ choices:", options);

//     return options;
// };

function playRound(humanChoice, computerChoice) {

    if (humanChoice !== null && humanChoice.includes("Rock")) {
        if (computerChoice.includes("Rock")) {
            moves.textContent = `Equal! ${humanChoice} has no efficacity on ${computerChoice}`;
        } else if (computerChoice.includes("Paper")) {
            moves.textContent = `You lose! ${humanChoice} is beaten by ${computerChoice}`;
            computerScore += 1;
            computerScoreDisplay.textContent = computerScore.toString();
        } else {
            humanScore += 1;
            humanScoreDisplay.textContent = humanScore.toString();
            moves.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        }
    } else if (humanChoice !== null && humanChoice.includes("Paper")) {
        if (computerChoice.includes("Rock")) {
            moves.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            humanScore += 1;
            humanScoreDisplay.textContent = humanScore.toString();
        } else if (computerChoice.includes("Paper")) {
            moves.textContent = `Equal! ${humanChoice} has no efficatity on ${computerChoice}`;
        } else {
            moves.textContent = `You lose! ${humanChoice} is beaten by ${computerChoice}`;
            computerScore += 1;
            computerScoreDisplay.textContent = computerScore.toString();
        }
    } else if (humanChoice !== null && humanChoice.includes("Scissors")) {
        if (computerChoice.includes("Rock")) {
            moves.textContent = `You lose! ${humanChoice} is beaten by ${computerChoice}`;
            computerScore += 1;
            computerScoreDisplay.textContent = computerScore.toString();
        } else if (computerChoice.includes("Paper")) {
            moves.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
            humanScore += 1;
            humanScoreDisplay.textContent = humanScore.toString();
        } else {
            moves.textContent = `Equal! ${humanChoice} has no efficacity on ${computerChoice}`;
        }
    } else if (humanChoice === null) {
        moves.textContent = `You need to select an option to play!`;
    } else {
        moves.textContent = `The Player choice is not valid! please type a valid option`;
    }
};



function playGame() {

if (humanScore === 5 && computerScore < 5) {
    winner.textContent = "YOU";
    humanScore = 0;
    computerScore = 0;
    humanScoreDisplay.textContent = humanScore.toString();
    computerScoreDisplay.textContent = computerScore.toString();
} else if (computerScore === 5 && humanScore < 5){
    winner.textContent = "COMPUTER";
    humanScore = 0;
    computerScore = 0;
    humanScoreDisplay.textContent = humanScore.toString();
    computerScoreDisplay.textContent = computerScore.toString();
} else if (humanScore === 0 || computerScore === 0) {
    winner.textContent = "";
}


};


paperButton.addEventListener('click', () => {
    playRound("Paper", getComputerChoice());
    humanChoiceDisplay.textContent = "Paper";
    playGame();
});

rockButton.addEventListener('click', () => {
    playRound("Rock", getComputerChoice());
    humanChoiceDisplay.textContent = "Rock";
    playGame();
});

scissorsButton.addEventListener('click', () => {
    playRound("Scissors", getComputerChoice());
    humanChoiceDisplay.textContent = "Scissors";
    playGame();
    
});