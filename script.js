let rpsButton = document.getElementById('rps-button');
let resultText = document.getElementById('result');
let userChoiceImg = document.getElementById('your-choice');
let computerChoiceImg = document.getElementById('computer-choice');
let winsText = document.getElementById('wins');
let lossesText = document.getElementById('losses');
let tiesText = document.getElementById('ties');

function expandRPSString(str) {
    if (str == "r") {
        return "Rock";
    } else if (str == "s") {
        return "Scissors";
    } else if (str == "p") {
        return "Paper";
    }

    return "Invalid";
}

let wins = 0
let loses = 0
let ties = 0
function rockPaperScissors() {
    let choices = ["r", "s", "p"];
    let randomNumber = Math.floor(Math.random() * choices.length)
    let computerChoice = choices[randomNumber]
    let userchoice = prompt("Whats your choice?")

    if (!choices.includes(userchoice)){
        resultText.innerText = "Invalid choice!";
        return;
    }

    userChoiceImg.src = "images/" + userchoice + ".png";
    computerChoiceImg.src = "images/" + computerChoice + ".png";

    console.log(userchoice)
    console.log(computerChoice)
    
    if (computerChoice === userchoice) {
        resultText.innerText = "Tied";
        //alert("Tied");
        ties++;
    }
    else if ((userchoice === 'r' && computerChoice === 's') ||
    (userchoice === 's' && computerChoice === 'p') ||
    (userchoice === 'p' && computerChoice === 'r')) {
        wins++;
        resultText.innerText = "You Win!";
        //alert("You Won!");
    
    }
    else {
        resultText.innerText = "You Lose!";
        //alert("You Lose!");
        loses++;
    }

    winsText.innerText = wins;
    lossesText.innerText = loses;
    tiesText.innerText = ties;
}



rpsButton.onclick = rockPaperScissors;