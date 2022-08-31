const textbox = document.querySelector('#textbox')

let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const temp = Math.floor(Math.random() * 3) + 1;
    let choice = '';
    if(temp == 1){
        choice = 'rock';
    }
    else if (temp == 2){
        choice = 'paper';
    }
    else{
        choice = 'scissors';
    }
    return choice;
}

function checkWinState(){
    if(playerScore == 5){
        return 'Player';
    }
    if(computerScore == 5){
        return 'Pomputer'
    }
    return null;
}


function playRound(playerSelection,computerSelection){
    if(checkWinState()){
        return;
    }
    if(playerSelection == computerSelection){
        result.textContent = `Tie. Both played ${playerSelection}.`;
        
    }
    else if((playerSelection == 'rock' && computerSelection == 'scissors') || 
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')){
        playerScore++;
        result.textContent = (`Player wins. ${playerSelection} beats ${computerSelection}`);
        
        
    }
    else{
        computerScore++;
        result.textContent = (`Computer wins. ${computerSelection} beats ${playerSelection}`);
        
        
    }
    score.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
    let winner = checkWinState();
    if(winner){
        result.textContent = (`${winner} wins the set.`);
    }
}

const buttons = document.querySelectorAll('.buttons button');
buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        playRound(button.id, getComputerChoice());
    });
})

/*function game(){
    
    while(playerScore < 5 && computerScore < 5){
        playerSelection = prompt('Rock, Paper, or Scissors?','rock');
        if(playerSelection == null){
            textbox.textContent = ('Game ended.');
            break;
        }
        let winner = playRound(playerSelection,getComputerChoice());
        if(winner == 'tie'){
            continue;
        }
        else if(winner == 'player'){
            playerScore++;
        }
        else if(winner == 'computer'){
            computerScore++;
        }
        textbox.textContent = (`Score: ${playerScore}|${computerScore}`)
    }
    if(playerScore == 5){
        textbox.textContent = (`Player wins the set. Final Score: ${playerScore}|${computerScore}`);
    }
    if(computerScore == 5){
        textbox.textContent = (`Computer wins the set. Final Score: ${playerScore}|${computerScore}`);
    }
}

game();*/