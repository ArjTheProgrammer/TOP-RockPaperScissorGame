function playRound(humanChoice, computerChoice) {
    if (!isValid(humanChoice, choices)){
        console.log(`${humanChoice} is not a valid pick`);
        return;
    }

    if (humanChoice == "rock" && computerChoice == "scissor" ||
        humanChoice == "paper" && computerChoice == "rock" ||
        humanChoice == "scissor" && computerChoice == "paper"
    ) {
        humanScore++;
        console.log(`
your choice: ${humanChoice}
computer choice: ${computerChoice}
You win! ${humanChoice} beats ${computerChoice}
        `);
    }
    else {
        computerScore++;
        console.log(`
        your choice: ${humanChoice}
        computer choice: ${computerChoice}
        You lose! ${computerChoice} beats ${humanChoice}`);
    }
}

let choices = ["rock", "paper", "scissor"];

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function getComputerChoice(){
    let computerIndex = Math.floor(Math.random() * choices.length);

   return choices[computerIndex];
}

function getHumanChoice(){
    let humanChoice = prompt("Pick [rock, paper, scissor]: ");
    humanChoice = humanChoice.toLowerCase();

    return humanChoice;
}

function isValid(humanChoice, choices){
    for (let choice of choices){
        if (humanChoice == choice) {
            return true;
        }
    }

}
