

//Function returns randomly either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay() {
    let random = ["rock", "paper", "scissors"];
    return random[Math.floor(Math.random() * 3)];

}


let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return "You are equal! your score is: "+ playerScore +" combuter score is: "+ computerScore;
        } else if (computerSelection === "paper") {
            computerScore++;
            return "Computer Win! Paper beats Rock.  your score is: "+ playerScore +" combuter score is: "+ computerScore;
        } else {
            playerScore++;
            return "You Win! Rock beats Scissors.  your score is: "+ playerScore +" combuter score is: "+ computerScore;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore++;
            return "You Win! Paper beats Rock.  your score is: "+ playerScore +" combuter score is: "+ computerScore;
        } else if (computerSelection === "paper") {
            return "You are equal!  your score is: " + playerScore +" combuter score is: "+ computerScore;

        } else {
            computerScore++;
            return "Computer Win! Scissors beats Paper.  your score is: " + playerScore +" combuter score is: "+ computerScore;
        }
    } else if (playerSelection === "scissors") {

        if (computerSelection === "rock") {
            computerScore++;
            return "Computer Win! Rock beats Scissors. your score is: "+ playerScore +" combuter score is: "+ computerScore;
        } else if (computerSelection === "paper") {
            playerScore++;
           result= "You Win! Scissors beats Paper. your score is: "+ playerScore +" combuter score is: "+ computerScore;
            return result;
        } else {
            result="You are equal!  your score is: "+ playerScore +" combuter score is: "+ computerScore;
            return result;
        }
    }
}

let round = 1;
function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Please select: rock, paper or scissors?").toLowerCase();
        const computerSelection = computerPlay().toLowerCase();
        console.log("Round " + round + ": " + playRound(playerSelection, computerSelection));
        
        round++;
    }

    console.log("Your final result is: " + playerScore);
    console.log("Computer final result is : " + computerScore);

    if (playerScore > computerScore) {
        console.log("You are the winner!");
        

    } else if (playerScore < computerScore) {

        console.log("Computer is the winner!");
       

    } else if (playerScore == computerScore) {

        console.log("You are equal!");
       
    }
}

game();
