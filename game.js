// Declaring variables
const $submitButton = document.getElementById("submit");
const $message = document.getElementById("message");
const $lives = document.getElementById("lives");
var message;
var lives = 10;

var guessNumber = Math.round(Math.random() * 100);

// Game function

$submitButton.onclick=()=>{
    console.log(guessNumber);

    let userintput = document.getElementById("number-input").value;
     
    lives--;

    if(userintput==guessNumber){
        location.href="./win.html";
    }

    else if(lives == 0){
        location.href="./lose.html";
        }
        else if(userintput > guessNumber){
        message = `Oops 😶! Your guess is too high. You have ${lives} lives remaining.`
        }
        else if(userintput < guessNumber){
        message = `Oops 😶! Your guess is too low. You have ${lives} lives remaining.`
        }
        
        $message.style.display = "inherit";
        $message.innerHTML = message;
        $lives.innerHTML = lives;
        }
