let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let text = document.querySelector('#text');
let playerh3 = document.querySelector('#playerScore');
let comph3 = document.querySelector('#compScore');
let newGame = document.querySelector('#newGame');
let player = document.querySelector('#player');
let comp = document.querySelector('#comp');
let events = document.querySelector('#event');
let playerScore = 0;
let computerScore = 0;
let nullManager = true;
let imgi = document.createElement('img');
let imgi2 = document.createElement('img');
newGame.addEventListener("click", () => {
    playerScore = 0; 
    computerScore = 0;
    nullManager = false;
    playerh3.textContent = playerScore;
    comph3.textContent = computerScore;
    if(newGame.textContent == "Start Game")
    {
        events.textContent = "The game has begun!"
    }
    else
    {
        events.textContent = "The game has been reset!"
    }
   

})
rock.addEventListener("click", () => {
    let results = playRound("rock", computerPlay());
    scoreDirector(results);
});

paper.addEventListener("click", () => {
    let results = playRound("paper", computerPlay());
    scoreDirector(results);
});

scissors.addEventListener("click", () => {
    let results = playRound("scissors", computerPlay());
    scoreDirector(results);
});

function imageController(image, id, divId) {
    let divString = divId;
    divId = document.querySelector(`#${divId}`);
    if(divString == 'comp' && nullManager == false)
    {
        imgi.setAttribute('id', id)
        if(image == "rock")
        {
            imgi.setAttribute('src', 'images/rock.png');
        }
        else if(image == 'paper')
        {
            imgi.setAttribute('src', 'images/paper.png');
        }
        else if(image == 'scissors')
        {
            imgi.setAttribute('src', 'images/scissors.png');
        }
        divId.appendChild(imgi);
    }
    else if(nullManager == false)
    {
        imgi2.setAttribute('id', id)
        if(image == "rock")
        {
            imgi2.setAttribute('src', 'images/rock.png')
        }
        else if(image == 'paper')
        {
            imgi2.setAttribute('src', 'images/paper.png')
        }
        else if(image == 'scissors')
        {
            imgi2.setAttribute('src', 'images/scissors.png')
        }
        divId.appendChild(imgi2);
    }

}

function scoreDirector(results) {
    if(!nullManager)
    {
        text.textContent = results;
        if(results.indexOf("You win!") != -1 && !nullManager) {
            playerScore++;
        }
        else if(results.indexOf("You lose!") != -1 && !nullManager) {
            computerScore++;
        }
        playerh3.textContent = playerScore;
        comph3.textContent = computerScore;
        if(playerScore >= 5) {
            text.textContent = `You win with 5 points, the computer had ${computerScore} points, press "new game" to play a new game`;
            nullManager = true;
            newGame.textContent = "New Game";
        } else if(computerScore >= 5) {
            text.textContent = `You lose with ${playerScore} points, the computer had 5 points, press "new game" to play a new game`;
            nullManager = true;
            newGame.textContent = "New Game";
        }
    }
}

function computerPlay() {
    let randomizer = Math.floor(Math.random() * 3);
    if (randomizer === 0) {
        return "Rock";
    } else if (randomizer === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    imageController(computerSelection, 'compimg', 'comp');
    imageController(playerSelection, 'playimg' , 'player')
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return "It's a tie!";
        } else if (computerSelection == "paper") {
            return "You lose! paper beats rock";
        } else {
            return "You win! rock beats scissors!";
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "paper") {
            return "It's a tie!";
        } else if (computerSelection == "rock") {
            return "You win! paper beats rock";
        } else {
            return "You lose! scissors beat paper!";
        }
    } else {
        if (computerSelection == "paper") {
            return "You win! scissors beat paper!";
        } else if (computerSelection == "rock") {
            return "You lose! rock beats scissors"
        } else {
            return "It's a tie!";
        }
    }
}

           