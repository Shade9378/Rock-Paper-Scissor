const container = document.querySelector("#container")

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    
    if (randomNumber == 1) {
        return "rock";
    }
    else if (randomNumber == 2) {
        return "paper";
    }
    else {
        return "scissor";
    }
}

function getHumanChoice()
{
    let playerSelection = prompt("What is your move?");
    return playerSelection;
}

function playRound(playerSelection,computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    div2.textContent = " ";
    if (playerSelection == computerSelection) {
        div1.textContent = "Draw! Try again";
    }

    else if ((playerSelection == "rock") && (computerSelection == "scissor") || ((playerSelection == "paper") && (computerSelection == "rock")) || ((playerSelection == "scissor") && (computerSelection == "rock"))) {
        div1.textContent = "You win!" + " " + playerSelection + " " + "beats" + " " + computerSelection;
        humanScore += 1;
    }

    else {
        div1.textContent = "You lose!" + " " + computerSelection + " " + "beats" + " " + playerSelection;
        computerScore += 1;
    }
    if (humanScore == 5) {
        div2.textContent = "You Win!";
        humanScore = 0;
        computerScore = 0
     }
    if (computerScore == 5) {
        div2.textContent = "You Lose!"
        humanScore = 0;
        computerScore = 0;
    }
}

/** function playGame() {
    for (let count = 0; count < 5; count += 1) {
        playRound(getHumanChoice(),getComputerChoice());
    }
}
**/

const rck = document.querySelector("#r1");
rck.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
});
const ppr = document.querySelector("#p1");
ppr.addEventListener("click", () => {
    playRound("paper", getComputerChoice())
});
const scr = document.querySelector("#s1");
scr.addEventListener("click", () => {
    playRound("scissor", getComputerChoice())
});

const div1 = document.createElement("div");
div1.classList.add("div1");
container.appendChild(div1);

const div2 = document.createElement("div");
div2.classList.add("div2");
container.appendChild(div2);



