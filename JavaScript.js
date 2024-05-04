let choices = ["rock", "paper", "scissor"];
let humanScore = 0;
let computerScore = 0;

/* this the function that plays a round*/
function playRound(humanChoice, computerChoice) {
    if (!isValid(humanChoice, choices)){
        console.log(`${humanChoice} is not a valid pick`);
        return;
    }

    if (humanChoice == "rock" && computerChoice == "scissor" ||
        humanChoice == "paper" && computerChoice == "rock" ||
        humanChoice == "scissor" && computerChoice == "paper"
    ) {
        ++humanScore;
        console.log(`
        Your score: ${humanScore}
        Computer score: ${computerScore}

        your choice: ${humanChoice}
        computer choice: ${computerChoice}
        You win! ${humanChoice} beats ${computerChoice}
        `);
    }
    else if (humanChoice == computerChoice) {
        console.log("Tied!")
        return;
    }
    else {
        ++computerScore;
        console.log(`
        Your score: ${humanScore}
        Computer score: ${computerScore}

        your choice: ${humanChoice}
        computer choice: ${computerChoice}
        You lose! ${computerChoice} beats ${humanChoice}`);
    }
}

/* this the where the game is played*/

function playGame() {

    while (humanScore != 5 && computerScore != 5){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
    
            playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log (`
        Congratulation! You win!
        `)
    }
    else if (humanScore < computerScore){
        console.log (`
        Sorry, you lose!
        `)
    }
    else {
        console.log (`
        intense! tied game!
        `)
    }
}


/* this the function that gets the computer choice*/
function getComputerChoice(){
    let computerIndex = Math.floor(Math.random() * choices.length);

   return choices[computerIndex];
}

/* this the function that gets the human choice*/
function getHumanChoice(){
    let humanChoice = prompt("Pick [rock, paper, scissor]: ");
    humanChoice = humanChoice.toLowerCase();

    return humanChoice;
}

/* this the function that checks if the answer of the user is valid*/
function isValid(humanChoice, choices){
    for (let choice of choices){
        if (humanChoice == choice) {
            return true;
        }
    }
}

playGame();
