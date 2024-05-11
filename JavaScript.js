let choices = ["rock", "paper", "scissor"];
let humanScore = 0;
let computerScore = 0;

const prompt = document.querySelector(".prompt");

const displayHumanScore = document.querySelector(".user-score");
const displayCompScore = document.querySelector(".bot-score");

/* this the function that plays a round*/
function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "scissor" ||
        humanChoice == "paper" && computerChoice == "rock" ||
        humanChoice == "scissor" && computerChoice == "paper"
    ) {
        ++humanScore;
        prompt.textContent = `${humanChoice} beats ${computerChoice}, You win!`;
        displayHumanScore.textContent = `Score: ${humanScore}`;
    }
    else if (humanChoice == computerChoice) {
        prompt.textContent = `Tie`;
    }
    else {
        ++computerScore;
        prompt.textContent = `${humanChoice} lose to ${computerChoice}, You lost!`
        displayCompScore.textContent = `Score: ${computerScore}`;
    }
}


/* this the function that gets the computer choice*/
function getComputerChoice(){
    let computerIndex = Math.floor(Math.random() * choices.length);

   return choices[computerIndex];
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");

rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

scissor.addEventListener("click", () => {
    playRound("scissor", getComputerChoice());
});
