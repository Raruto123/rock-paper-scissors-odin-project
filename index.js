/*
1) creer une fonction getComputerChoice
2)getComputerChoice doit retourner 3 valeurs
3) il doit retourner cela aléatoirement
4) se servir de Math.random pour mettre en place la condition de retour
*/

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

    return choice;
}



/*
1) creer une fonction getHumanChoice
2)getHumanChoice doit retourner 3 valeurs
3) il doit retourner cela selon ce que le joueur humain a tapé comme valeur de 0 à 99
4) se servir de Prompt pour obtenir l'entrée de l'humain
*/

function getHumanChoice() {
    let options = prompt("Type your choice : Rock - Paper - Scissors ?");
    let inventory = ["Rock", "Paper", "Scissors"];

    if (options.toLocaleLowerCase().includes(inventory[0].toLocaleLowerCase())) {
        options = inventory[0];
    } else if (options.toLocaleLowerCase().includes(inventory[1].toLocaleLowerCase())) {
        options = inventory[1];
    } else if (options.toLocaleLowerCase().includes(inventory[2].toLocaleLowerCase())) {
        options = inventory[2];
    } else {
        options = "no valid value"
    }

    console.log("test");


    return options;
};



/*
1)écrit une fonction playRound pour jouer un round
2)la fonction playRound a deux paramètres : humanChoice, ComputerChoice
3)humanChoice doit pouvoir prendre du miniscule comme du majascule
4) la fonction playRound doit retourner un string du style `You lose/win ${computerChoice} beats/lose to ${humanChoice} `
5) incrementer la variable de score du vainqueur du round
*/


function playRound(humanChoice, computerChoice) {

    if (humanChoice.includes("Rock")) {
        if (computerChoice.includes("Rock")) {
            console.log(`Equal! ${humanChoice} has no efficacity on ${computerChoice}`);
        } else if (computerChoice.includes("Paper")) {
            console.log(`You lose! ${humanChoice} is beaten by ${computerChoice}`);
            console.log(`Computer Score = ${computerScore += 1}`);
        } else {
            console.log(`Human Score = ${humanScore += 1}`);
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        }
    } else if (humanChoice.includes("Paper")) {
        if (computerChoice.includes("Rock")) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            console.log(`Human Score = ${humanScore += 1}`);
        } else if (computerChoice.includes("Paper")) {
            console.log(`Equal! ${humanChoice} has no efficatity on ${computerChoice}`);
        } else {
            console.log(`You lose! ${humanChoice} is beaten by ${computerChoice}`);
            console.log(`Computer Score = ${computerScore += 1}`);
        }
    } else if (humanChoice.includes("Scissors")) {
        if (computerChoice.includes("Rock")) {
            console.log(`You lose! ${humanChoice} is beaten by ${computerChoice}`);
            console.log(`Computer Score = ${computerScore += 1}`);
        } else if (computerChoice.includes("Paper")) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            console.log(`Human Score = ${humanScore += 1}`);
        } else {
            console.log(`Equal! ${humanChoice} has no efficacity on ${computerChoice}`);
        }
    } else {
        console.log(`The Human Player choice is not valid! please type a valid option`);
    }



};

/*
pierre - pierre = égalité
pierre - papier = défaite de pierre
pierre - ciseaux = victoire de pierre

papier - pierre = victoire de papier
papier - papier = égalité
papier - ciseaux = défaite de papier

ciseaux - pierre = défaite de ciseaux
ciseaux - papier = défaite de papier
ciseaux - ciseaux = égalité

*/

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);