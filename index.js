let options = ["rock","paper","scissors"];
let startButton = document.getElementById('start-btn');
let buttons = document.querySelectorAll('button');
let report = document.getElementById('report');
let playerScore = document.getElementById('playerScore');
let result = document.getElementById('result');
let computerScore = document.getElementById('computerScore');
let final = document.getElementById('final');
let game = document.getElementById('game');
let banner = document.getElementById('banner');
let title = document.getElementById('title');
let reportText = [];

if (startButton) {
  startButton.addEventListener('click', function () {
    banner.style.display = "none";
    game.style.display = 'block';
    game.style.display = 'flex';
  }) 
}

//Function to Select any one option by Computer
computerPlay = () => options[Math.floor(Math.random()*options.length)];

// Function to Select any one option by Player
setButtonListeners = () => {
  buttons.forEach(button => {
    button.addEventListener('click',(e)=>{
      if (button.classList.contains('rock')) buttonClicked('rock');
      else if (button.classList.contains('paper')) buttonClicked('paper');
      else if (button.classList.contains('scissors')) buttonClicked('scissors');  
    })
    }  
  );
}

// Function to Decide the Winner between Player and Computer
playRound = (playerSelection,computerSelection) => {
  title.textContent = `Round : ${round}`;
  if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'paper') || (playerSelection === 'rock' && computerSelection === 'paper')) {
    result.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
    reportText.push(`Round ${round} : You win! ${playerSelection} beats ${computerSelection}!`);
    result.style.color = 'green';
    return true;
  } else if (computerSelection == 'rock' && playerSelection == 'paper' || computerSelection == 'scissors' && playerSelection == 'paper' 
  || computerSelection == 'rock' && playerSelection == 'scissors') {
    result.textContent = `You lose! ${computerSelection} beats ${playerSelection}!`;
    reportText.push(`Round ${round} : You lose! ${computerSelection} beats ${playerSelection}!`);
    result.style.color = 'red';
    return false
  } else if(playerSelection === computerSelection) {
    result.textContent = `Draw! You both chose ${playerSelection}!`;
    reportText.push(`Round ${round} : Draw! You both chose ${playerSelection}!`);
    result.style.color = 'blue';
    return;
    }
  }

function finalReport(playerWins, computerWins) {
  game.style.display = 'none';
  report.style.display = 'block';
  report.style.display = 'flex';
  document.getElementById('title1').style.display = 'none';
  document.getElementById('home-btn').style.display = 'block';
  document.getElementById('display').innerHTML = reportText.join("<br>");
  playerScore.textContent = playerWins;
  computerScore.textContent = computerWins;
  if (playerWins > computerWins) {
    document.getElementById('win').style.display = 'block';
    final.textContent = "\nCongrats! You have beaten the computer!";
    final.style.color = 'green';
  }
  else if (computerWins > playerWins) {
    document.getElementById('lose').style.display = 'block';
    final.textContent = "\nBetter luck next time! Computer have beaten you!";
    final.style.color = 'red';
  }
  else {
    document.getElementById('draw').style.display = 'block';
    final.textContent = "\nThe computer and you have drawn!";
    final.style.color = 'blue';
  }
}

// Funtion to Player's Five round scores and reports
let playerWins = 0;
let computerWins = 0;
let roundResult = false;
let round = 0;

function buttonClicked(buttonName) {
  ++round;
  let computerSelection = computerPlay();
  let playerSelection = buttonName;
  roundResult = playRound(playerSelection,computerSelection) 
  if (roundResult === true) {
    playerWins = playerWins + 1;
  }
  else if (roundResult === false) {
    computerWins = computerWins +1;
  }
  if (playerWins == 5 || computerWins == 5) {
    finalReport(playerWins, computerWins);
  }
}

setButtonListeners();  