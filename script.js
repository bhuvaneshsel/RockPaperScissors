game();

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
        if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
            return 1
        }
        if (playerSelection === "ROCK" && computerSelection === "PAPER") {
            return 0;
        }
        if (playerSelection === "PAPER" && computerSelection === "ROCK") {
            return 1
        }
        if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
            return 0;
        }
        if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
            return  0;
        }
        if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
            return 1
        }
        return "hello";
}

    function game() {
        let playerScore = 0;
        let computerScore = 0;
        for (let i = 0; i < 5; i++) {
            playerSelection = prompt("Enter rock, paper, or scissors: ");
            playerSelection = playerSelection.toUpperCase();
            computerSelection = getComputerChoice();
            if (playRound(playerSelection, computerSelection) ===1) {
                console.log(`You win! ${playerSelection} beats ${computerSelection}`);
                playerScore++;
            }
            else if (playRound(playerSelection, computerSelection) ===0)  {
                console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
                computerScore++;
            }
            else if (playRound(playerSelection, computerSelection) ===2)  {
                console.log(`You tie! ${computerSelection} ties with ${playerSelection}`);
            }           
        }
        if (playerScore > computerScore) {
            console.log(`You won ${playerScore} rounds! The computer won ${computerScore} rounds! You win the match!`)
        }
        if (computerScore > playerScore) {
            console.log(`You won ${playerScore} rounds! The computer won ${computerScore} rounds! You lose the match!`)
        }
        if (computerScore === playerScore) {
            console.log(`You won ${playerScore} rounds! The computer won ${computerScore} rounds! You tie the match!`)
        }
    }

   
