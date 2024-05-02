let choices = ["Rock", "Paper", "Scissor"];

function getComputerChoice(){
    let computerIndex = Math.floor(Math.random() * choices.length);

   return choices[computerIndex];
}

console.log(getComputerChoice());