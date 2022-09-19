
let throwCount = 0;
let openDices = new Array(5).fill(true);


// funktion to roll dices. 
document.querySelector('#buttonRoll').onclick=rollDices;
document.querySelector("#S1").onclick = disableS1;
document.querySelector("#S2").onclick = disableS2;
document.querySelector("#S3").onclick = disableS3;
document.querySelector("#S4").onclick = disableS4;
document.querySelector("#S5").onclick = disableS5;
document.querySelector("#S6").onclick = disableS6;
document.querySelector("#C1").onclick = disableDiceD1;
document.querySelector("#C2").onclick = disableDiceD2;
document.querySelector("#C3").onclick = disableDiceD3;
document.querySelector("#C4").onclick = disableDiceD4;
document.querySelector("#C5").onclick = disableDiceD5;

function rollDices(){
    let i = 0;
    let dices=document.querySelectorAll(".YatziDice");
    let TurnLabel=document.querySelector("#TurnLabel");
    if(throwCount <= 2){
        for (let dice of dices){
            if(openDices[i]){
                dice.value = Math.floor(Math.random() * 6) + 1; 
            }
            i++;  
        }
        throwCount++;
        TurnLabel.innerHTML = "Turn: " + throwCount
    }
    if(throwCount >= 3){
        disabledDicesButtonAndCheckBoxes();
    }
}

function disabledDicesButtonAndCheckBoxes(){
    let dices=document.querySelectorAll(".YatziDice");
    let buttonRoll = document.querySelector("#buttonRoll")
    let switches = document.querySelectorAll(".switch")

    for (let dice of dices){
        dice.outerHTML = "<input value= " + dice.value + " class = YatziDice type=number id=" + dice.id + " readonly disabled>" 
    }
    for(let chechbox of switches){
        chechbox.innerHTML = "<input type = checkbox disabled>"
    }
    buttonRoll.outerHTML = "<button id = buttonRoll disabled>Roll!</button>"   
}

//Funktioner hvis der klikkes på alle s. 
function disableS1(){
    let sField = document.querySelector("#S1");
    sField.outerHTML = "<input class = Yatziudfald type = number id = S1 readonly disabled>"
    ResetDices();
}

function disableS2(){
    let sField = document.querySelector("#S2");
    sField.outerHTML = "<input class = Yatziudfald type = number id = S2 readonly disabled>"
    ResetDices();
}

function disableS3(){
    let sField = document.querySelector("#S3");
    sField.outerHTML = "<input class = Yatziudfald type = number id = S3 readonly disabled>"
    ResetDices();
}

function disableS4(){
    let sField = document.querySelector("#S4");
    sField.outerHTML = "<input class = Yatziudfald type = number id = S4 readonly disabled>"
    ResetDices();
}

function disableS5(){
    let sField = document.querySelector("#S5");
    sField.outerHTML = "<input class = Yatziudfald type = number id = S5 readonly disabled>"
    ResetDices();
}

function disableS6(){
    let sField = document.querySelector("#S6");
    sField.outerHTML = "<input class = Yatziudfald type = number id = S6 readonly disabled>"
    ResetDices();
}

//ved clik på en af S felterne, resettes terninger felter samt lock, roll knap og turn label. 
function ResetDices(){
let dices=document.querySelectorAll(".YatziDice");
let buttonRoll = document.querySelector("#buttonRoll")
let switches = document.querySelectorAll(".switch")
let TurnLabel=document.querySelector("#TurnLabel");

for (let dice of dices){
        dice.outerHTML = "<input value= 0 class = YatziDice type=number id=" + dice.id + " readonly>" 
    }
for(let chechbox of switches){
        chechbox.innerHTML = "<input type = checkbox>"
    }
buttonRoll.outerHTML = "<button id = buttonRoll>Roll!</button>"  

document.querySelector('#buttonRoll').onclick=rollDices;
throwCount = 0;
TurnLabel.innerHTML = "Turn: 0"
openDices.fill(true);
}

//Disabler den dice der passer til checkbox, ved klick i cheach box.  
function disableDiceD1(){
    let d1 = document.querySelector("#d1");
    let c1 = document.querySelector("#C1");
    d1.outerHTML = "<input value=" +d1.value+" class = YatziDice type=number id=d1 readonly disabled>" 
    c1.innerHTML = "<input type = checkbox disabled>"
    openDices[0] = false;
}

function disableDiceD2(){
    let d2 = document.querySelector("#d2");
    let c2 = document.querySelector("#C2");
    d2.outerHTML = "<input value=" +d2.value+" class = YatziDice type=number id=d2 readonly disabled>" 
    c2.innerHTML = "<input type = checkbox disabled>"
    openDices[1] = false;
}

function disableDiceD3(){
    let d3 = document.querySelector("#d3");
    let c3 = document.querySelector("#C3");
    d3.outerHTML = "<input value=" +d3.value+" class = YatziDice type=number id=d3 readonly disabled>" 
    c3.innerHTML = "<input type = checkbox disabled>"
    openDices[2] = false;
}

function disableDiceD4(){
    let d4 = document.querySelector("#d4");
    let c4 = document.querySelector("#C4");
    d4.outerHTML = "<input value=" +d4.value+" class = YatziDice type=number id=d4 readonly disabled>" 
    c4.innerHTML = "<input type = checkbox disabled>"
    openDices[3] = false;
}

function disableDiceD5(){
    let d5 = document.querySelector("#d5");
    let c5 = document.querySelector("#C5");
    d5.outerHTML = "<input value=" +d5.value+" class = YatziDice type=number id=d5 readonly disabled>" 
    c5.innerHTML = "<input type = checkbox disabled>"
    openDices[4] = false;
}





