
const playerDiv = document.querySelector(".player-score");
const computerDiv = document.querySelector(".computer-score");
const btn = document.querySelector("#rps");
const roundWinner = document.querySelector("#round-winner")
const reset = document.querySelector("#reset");
const gameWinner = document.querySelector("#game-winner");
let x = 0;
let y = 0;

btn.addEventListener("click", (e) => {
    
    let playerSelection = e.target.textContent;
    let computerSelection = getComputerChoice();

    if (x <5 && y < 5) {

        if (playRound(playerSelection, computerSelection) == 2) {
        console.log("TIE");
        roundWinner.textContent = `You chose ${playerSelection}. The computer
        chose ${computerSelection}. It's a tie!`
        }

        else if (playRound(playerSelection, computerSelection) == 1) {
        console.log("PLAYER WINS");
        x++;
        playerDiv.textContent = `Player Score: ${x}`
        roundWinner.textContent = `You chose ${playerSelection}. The computer
        chose ${computerSelection}. You win!`
        }

        else if (playRound(playerSelection, computerSelection) == 0) {
        console.log("COMPUTER WINS");
        y++;
        computerDiv.textContent = `Computer Score: ${y}`
        roundWinner.textContent = `You chose ${playerSelection}. The computer
        chose ${computerSelection}. You lose!`
        }

        if (x == 5) {
            gameWinner.textContent = "You win the game! Click reset to play again!"
        }
        if (y == 5) {
            gameWinner.textContent = "Uh oh! The computer wins the game! Click reset to play again!"
        }
    }
});

reset.addEventListener("click", () => {
    x = 0;
    y = 0;
    playerDiv.textContent = `Player Score: ${x}`
    computerDiv.textContent = `Computer Score: ${y}`
    roundWinner.textContent = "";
    gameWinner.textContent = "";
});

function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber >=0 && randomNumber < 0.33) {
        return "ROCK";
    }
    if (randomNumber >=0.33 && randomNumber < 0.66) {
        return "PAPER";
    }
    if (randomNumber >=0.66 && randomNumber < 1) {
        return "SCISSORS";
    }
}

function playRound(playerSelection, computerSelection) {

        if (playerSelection === computerSelection) {
            return 2;
        }
        
        if (playerSelection === "ROCK" && computerSelection === "SCISSORS" || 
            playerSelection === "PAPER" && computerSelection === "ROCK" || 
            playerSelection === "SCISSORS" && computerSelection === "PAPER") {
            return 1
        }

        if (playerSelection === "ROCK" && computerSelection === "PAPER" ||
            playerSelection === "PAPER" && computerSelection === "SCISSORS" || 
            playerSelection === "SCISSORS" && computerSelection === "ROCK") {
            return 0;
        }
}
     
        
       


 
   
