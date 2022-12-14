

// Returns a string value - rock, paper, scissors 
// based on randomly generated integer
function getComputerChoice(){
    let index = Math.floor(Math.random()*3) + 1;
    return (index == 1) 
    ? "rock" : (index == 2) 
    ? "paper" : (index == 3) 
    ? "scissors" : "undefined";
}

// for(i = 0; i <= 100; i++){
//     let result = getComputerChoice();
//     console.log(result);
// }

function getUserChoice(){
    let userInput = prompt("Rock, Paper or Scissors", "");
    //Make userInput case insensitive
    userInput = userInput.toLowerCase();
    //return string or number value?
    return userInput;
}

function checkUserChoiceValidity(){
    let userInput = getUserChoice();
    if (userInput == "rock" || userInput == "paper"
    || userInput == "scissors"){
        return userInput;
    }
    else{
        alert("Not a valid choice!");
        return;
    }
}

game();

function game(){

    let score = 0;
    for (let i = 0; i < 5; i++){
        score = playRound(checkUserChoiceValidity(), getComputerChoice(), score);
        console.log(score);
    }
    if (score > 0){
        console.log("YOU WIN!");
    }
    else if (score < 0){
        console.log("YOU LOSE")
    }
    else{
        console.log("It's a tie");
    }
    
}

//Could call functions as parameters?
function playRound(userInput, computerInput, _score){
    
    //deugging
    console.log(userInput);
    console.log(computerInput);
    
    //scoring
    let score = _score;
    

    //Comparison of both? 
    switch(userInput){
        case "rock":
            switch(computerInput){
                case "scissors":
                    alert("YOU WIN! ROCK BEATS SCISSORS");
                    score++;
                    return score;
                    break;
                case "paper":
                    alert("YOU LOSE! PAPER BEAT ROCK")
                    score--;
                    return score;
                    break;
                case "rock":
                    alert("IT'S A TIE");
                    return score;
                    break;
                default:
                       
            }
        break;
        case "paper":
            switch(computerInput){
                case "rock":
                    alert("YOU WIN! PAPER BEATS ROCK");
                    score++;
                    return score;
                    break;
                case "scissors":
                    alert("YOU LOSE! SCISSORS BEAT PAPER");
                    score--;
                    return score;
                    break;
                case "paper":
                    alert("IT'S A TIE");
                    return score;
                    break;
                default:
                    
            }
        break;
        case "scissors":
            switch(computerInput){
                case "paper":
                    alert("YOU WIN! SCISSORS BEAT PAPER");
                    score++;
                    return score;
                    break;
                case "rock":
                    alert("YOU LOSE! ROCK BEATS SCISSORS");
                    score--;
                    return score;
                    break;
                case "scissors":
                    alert("IT'S A TIE");
                    break;
                    return score;
                default:
                    
            }
        break;
        default:
    }
    
    
}

