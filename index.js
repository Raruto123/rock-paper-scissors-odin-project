let humanScore = 0;
let computerScore = 0;



function getComputerChoice() {
    let numberReturned = Math.floor(Math.random() * 100);
    let choice = "";
    if (numberReturned <= 33) {
        choice = "Rock";
    } else if (numberReturned > 33 && numberReturned <= 66) {
        choice = "Paper";
    } else if (numberReturned > 66 && numberReturned <= 99) {
        choice = "Scissors";
    } else {
        choice  = null;
    }
    console.log(`COMPUTER CHOICE THIS ROUND : ${choice}`);

    return choice;
}


function getHumanChoice() {
    let options = prompt("Type your choice : Rock - Paper - Scissors ?");
    let inventory = ["Rock", "Paper", "Scissors"];

    if (options !== null && options.toLocaleLowerCase().includes(inventory[0].toLocaleLowerCase())) {
        options = inventory[0];
    } else if (options !== null && options.toLocaleLowerCase().includes(inventory[1].toLocaleLowerCase())) {
        options = inventory[1];
    } else if (options !== null && options.toLocaleLowerCase().includes(inventory[2].toLocaleLowerCase())) {
        options = inventory[2];
    } else if (options === null){
        options = "no value chosen";
    } else {
        options = "no valid value";
    }
    console.log(`PLAYER CHOICE THIS ROUND : ${options}`);


    return options;
};


function playRound(humanChoice, computerChoice) {

    if (humanChoice !== null && humanChoice.includes("Rock")) {
        if (computerChoice.includes("Rock")) {
            console.log(`Equal! ${humanChoice} has no efficacity on ${computerChoice}`);
        } else if (computerChoice.includes("Paper")) {
            console.log(`You lose! ${humanChoice} is beaten by ${computerChoice}`);
            console.log(`Computer Score = ${computerScore += 1}`);
        } else {
            console.log(`Human Score = ${humanScore += 1}`);
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        }
    } else if (humanChoice !== null && humanChoice.includes("Paper")) {
        if (computerChoice.includes("Rock")) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            console.log(`Human Score = ${humanScore += 1}`);
        } else if (computerChoice.includes("Paper")) {
            console.log(`Equal! ${humanChoice} has no efficatity on ${computerChoice}`);
        } else {
            console.log(`You lose! ${humanChoice} is beaten by ${computerChoice}`);
            console.log(`Computer Score = ${computerScore += 1}`);
        }
    } else if (humanChoice !== null && humanChoice.includes("Scissors")) {
        if (computerChoice.includes("Rock")) {
            console.log(`You lose! ${humanChoice} is beaten by ${computerChoice}`);
            console.log(`Computer Score = ${computerScore += 1}`);
        } else if (computerChoice.includes("Paper")) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            console.log(`Human Score = ${humanScore += 1}`);
        } else {
            console.log(`Equal! ${humanChoice} has no efficacity on ${computerChoice}`);
        }
    } else if (humanChoice === null) {
        console.log(`You need to select an option to play!`);
    } else {
        console.log(`The Player choice is not valid! please type a valid option`);
    }



};
// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection)

function playGame() {

for (let i = 1; i <= 5; i++) {
    if (i === 1) {
        console.log("ROUND 1 START!");
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (i === 2) {
        console.log("ROUND 2 START!");
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (i === 3) {
        console.log("ROUND 3 START!");
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (i === 4) {
        console.log("ROUND 4 START!");
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (i === 5) {
        console.log("ROUND 5 START!");
        playRound(getHumanChoice(), getComputerChoice());
    }
}

console.log(`PLAYER'S POINTS : ${humanScore} VS COMPUTER'S POINTS : ${computerScore}`)

if (humanScore > computerScore) {
    console.log("Congratulations ! You won.");
} else if(humanScore === computerScore) {
    console.log("Even ! No Winner yet!");
} else {
    console.log("Too bad ! You lose.");
}


};


playGame();