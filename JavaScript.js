let choices = ["rock", "paper", "scissor"];

function getComputerChoice(){
    let computerIndex = Math.floor(Math.random() * choices.length);

   return choices[computerIndex];
}

function getHumanChoice(){
    let humanChoice = prompt("Pick [rock, paper, scissor]: ");
    humanChoice = humanChoice.toLowerCase();
        
    if (!choices.includes(humanChoice)){
        console.log("enter valid pick");
        return new getHumanChoice();
    }
    return humanChoice;
}

console.log(getHumanChoice());