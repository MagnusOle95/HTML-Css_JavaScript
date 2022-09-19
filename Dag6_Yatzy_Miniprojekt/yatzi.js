
let throwCount = 0;


// funktion to roll dices. 
document.querySelector('#buttonRoll').onclick=rollDices

function rollDices(){
    let dices=document.querySelectorAll(".YatziDice");
    let TurnLabel=document.querySelector("#TurnLabel");
    let buttonRoll = document.querySelector("#buttonRoll")
    let switches = document.querySelectorAll(".switch")
    if(throwCount <= 2){
        for (let dice of dices){
            dice.value = Math.floor(Math.random() * 6) + 1;
        }
        throwCount++;
        TurnLabel.innerHTML = "Turn: " + throwCount
    }
    if(throwCount >= 3){
        disabledDicesButtonAndCheckBoxes(dices,switches,buttonRoll);
    }
}

function disabledDicesButtonAndCheckBoxes(dices,switches,buttonRoll){
    for (let dice of dices){
        dice.outerHTML = "<input value= " + dice.value + " class = YatziDice type=number id=" + dice.id + " readonly disabled>" 
    }
    for(let chechbox of switches){
        chechbox.innerHTML = "<input type = checkbox disabled>"
    }
    buttonRoll.outerHTML = "<button id = buttonRoll disabled>Roll!</button>"   
}


//test 1232









