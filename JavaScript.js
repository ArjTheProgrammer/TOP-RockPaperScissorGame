let choices = ["rock", "paper", "scissor"];

function getComputerChoice(){
    let computerIndex = Math.floor(Math.random() * choices.length);

   return choices[computerIndex];
}

function getHumanChoice(){
    let humanChoice = prompt("Pick [rock, paper, scissor]: ");
    humanChoice = humanChoice.toLowerCase();
    
    if (!isValid(humanChoice, choices)){
        console.log(`${humanChoice} is not a valid pick`);
        return;
    }

    return humanChoice;
}

function isValid(humanChoice, choices){
    for (let choice of choices){
        if (humanChoice == choice) {
            return true;
        }
    }
}
