
let throwCount = 0;
let openDices = new Array(5).fill(true);
let valueDice = new Array(5).fill(0);
let openSFields = new Array(6).fill(true);
let valueSFields = new Array(6).fill(0);
let valuespecialfields = new Array(9).fill(0);
let openSpecialFields = new Array(9).fill(true);
let libaryForlockedspecialField = { "Onepair":"0", "Twopair":"1", "Threesame":"2", "Foursame":"3", "Fullhouse":"4", "Smallstraigt":"5", "Largestraigt":"6", "Chance":"7", "Yatzi":"8"};


// funktion to roll dices. 
document.querySelector('#buttonRoll').onclick=rollDices;
document.querySelector("#S1").onclick = () => disableSFields(1);
document.querySelector("#S2").onclick = () => disableSFields(2);
document.querySelector("#S3").onclick = () => disableSFields(3);
document.querySelector("#S4").onclick = () => disableSFields(4);
document.querySelector("#S5").onclick = () => disableSFields(5);
document.querySelector("#S6").onclick = () => disableSFields(6);
document.querySelector("#C1").onclick = disableDiceD1;
document.querySelector("#C2").onclick = disableDiceD2;
document.querySelector("#C3").onclick = disableDiceD3;
document.querySelector("#C4").onclick = disableDiceD4;
document.querySelector("#C5").onclick = disableDiceD5;
document.querySelector("#Onepair").onclick = () => disableSpecialFields("Onepair");
document.querySelector("#Twopair").onclick = () => disableSpecialFields("Twopair");
document.querySelector("#Threesame").onclick = () => disableSpecialFields("Threesame");
document.querySelector("#Foursame").onclick = () => disableSpecialFields("Foursame");
document.querySelector("#Fullhouse").onclick = () => disableSpecialFields("Fullhouse");
document.querySelector("#Smallstraigt").onclick = () => disableSpecialFields("Smallstraigt");
document.querySelector("#Largestraigt").onclick = () => disableSpecialFields("Largestraigt");
document.querySelector("#Chance").onclick = () => disableSpecialFields("Chance");
document.querySelector("#Yatzi").onclick = () => disableSpecialFields("Yatzi");



function rollDices(){
    let i = 0;
    let dices=document.querySelectorAll(".YatziDice");
    let TurnLabel=document.querySelector("#TurnLabel");
    if(throwCount <= 2){
        for (let dice of dices){
            if(openDices[i]){
                valueDice[i] = Math.floor(Math.random() * 6) + 1;
                dice.value = valueDice[i];
            }
            i++;  
        }
        throwCount++;
        TurnLabel.innerHTML = "Turn: " + throwCount
    }
    if(throwCount >= 3){
        disabledDicesButtonAndCheckBoxes();
    }
    visRasultaterS();
    onePair();
    twoPairs();
    threeSamePoints();
    fourSamePoints();
    fullHousePoints()
    smallStraight();
    largeStraight();
    chance();
    yatzi();
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

//Funktion hvis der klikkes på alle s. 
function disableSFields(S){
    let sField = document.querySelector("#S"+S);
    sField.outerHTML = "<input class = Yatziudfald value = "+ sField.value +" type = number id = S"+S+" readonly disabled>"
    ResetDices();
    openSFields[S-1] = false;
    sumToSumField();
    tjekForEndGame();
}

//Funktion, hvis der klikkes på alle specialfelter. 
function disableSpecialFields(id){
    let specialField = document.querySelector("#" + id);
    specialField.disabled = true;
    let location = libaryForlockedspecialField[id];
    openSpecialFields[location] = false;
    sumToSumField();
    ResetDices();
    tjekForEndGame();
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


//Viser resultater, på S felter. 
function visRasultaterS(){
    for(let i = 1; i <=6;i++){
        if(openSFields[i-1] == true){
            let S = document.querySelector("#S" + i);
            valueSFields[i-1] = SumS(i);
            S.value = valueSFields[i-1];
        }
    }
}


//Udregner antal, points på S felter. 
function SumS(S){
    amount = 0;
    for(let value of valueDice ){
        if(value == S){
            amount++;
        }
    }
    return amount * S;
}

//Ligger, værdien af s feltet ind i sum feltet. 
function sumToSumField(){
    let sum = 0;
    let sumfield = document.querySelector("#Sum");
    let bonusField = document.querySelector("#Bonus");
    for(let i = 0; i < valueSFields.length; i++){
        if(!openSFields[i]){
            sum += valueSFields[i];  
        }
    }
    sumfield.value = sum;
    let bonusValue = CheckIfYouGotBonus(sum);
    bonusField.value = bonusValue;
    total(sum + bonusValue);
}

function CheckIfYouGotBonus(sum){
    bonus = 0;
    if (sum >= 63){
        bonus = 50;
    }
    return bonus;
}

function total(sum){
    let totalField = document.querySelector("#Total");
    for(let i = 0; i < valuespecialfields.length; i++){
        if(openSpecialFields[i] == false){
            sum += valuespecialfields[i]; 
        }
    }
    totalField.value = sum;

}

function calcCountsOFUdfald() {
    let list = new Array(7).fill(0);
    for (let i = 0; i < list.length; i++){
        for (let j = 1; j <= 6;j++){
            if (valueDice[i] == j){
                list[j]++;
            }
        }
    }
    return list;
}

function onePair(){
    let onePairField = document.querySelector("#Onepair");
    if(onePairField.disabled == false){

        let points = 0;
        let listeMedUdfald = calcCountsOFUdfald();
        for (let i = 1; i <= 6;i++){
            if(listeMedUdfald[i] >= 2){
                points = i * 2;
            }
        }
        valuespecialfields[0] = points;
        onePairField.value = points;   
    }
}

function twoPairs(){
    let twoPairField = document.querySelector("#Twopair");
    if(twoPairField.disabled == false){

    let listeMedUdfald = calcCountsOFUdfald();
    let pairCount = 0;
    let points = 0;

    for (let i = 1; i <= 6;i++){
        if(listeMedUdfald[i] >= 2){
            points += i * 2;
            pairCount++;
            }
        }

    if (pairCount != 2){
        points = 0;
    }
    valuespecialfields[1] = points;
    twoPairField.value = points;
    }
}

function threeSamePoints(){
    let threeSameField = document.querySelector("#Threesame");
    if(threeSameField.disabled == false){
       
        let listeMedUdfald = calcCountsOFUdfald();
    let points = 0;

    for (let i = 1; i <= 6;i++){
        if (listeMedUdfald[i] >= 3){
            points = i * 3;
        }
    }
    valuespecialfields[2] = points;
    threeSameField.value = points;
    }
}

function fourSamePoints(){
    let fourSameField = document.querySelector("#Foursame");
    if(fourSameField.disabled == false){

        let listeMedUdfald = calcCountsOFUdfald();
        let points = 0;

        for (let i = 1; i <= 6;i++){
            if (listeMedUdfald[i] >= 4){
            points = i * 4;
            }
        }
        valuespecialfields[3] = points;
        fourSameField.value = points;
    }
}

function fullHousePoints(){
    let fullHouseField = document.querySelector("#Fullhouse");
    if(fullHouseField.disabled == false){
        
    let listeMedUdfald = calcCountsOFUdfald();
    let points = 0
    let threepairPoints = 0;
    let twoPairPoints = 0;

    for(let i = 1; i <= 6; i++){
        if (listeMedUdfald[i] == 3){
            threepairPoints = i * 3;
        }
        if (listeMedUdfald[i] == 2){
            twoPairPoints = i * 2;
        }
    }

    if (threepairPoints > 0 && twoPairPoints > 0){
        points = threepairPoints + twoPairPoints;
    }
    valuespecialfields[4] = points;
    fullHouseField.value = points;
    }
}


function smallStraight(){
    let smallStraightField = document.querySelector("#Smallstraigt");
    if(smallStraightField.disabled == false){

    let listeMedUdfald = calcCountsOFUdfald();
    let points = 0

    for (let i = 1; i <= 5;i++){
        if (listeMedUdfald[i] == 1){
            points += i;
        }
    }
    if (points != 15){
        points = 0;
    }
    valuespecialfields[5] = points;
    smallStraightField.value = points;
    }
}

function largeStraight(){
    let largeStraightField = document.querySelector("#Largestraigt");
    if(largeStraightField.disabled == false){

    let listeMedUdfald = calcCountsOFUdfald();
    let points = 0

    for (let i = 2; i <= 6;i++){
        if (listeMedUdfald[i] == 1){
            points += i;
        }
    }
    if (points != 20){
        points = 0;
    }
    valuespecialfields[6] = points;
    largeStraightField.value = points;
    }
}

function chance (){
    let chanceField = document.querySelector("#Chance");
    if(chanceField.disabled == false){
    let points = 0
    for(let value of valueDice){
        points += value;
    }
    valuespecialfields[7] = points;
    chanceField.value = points;
    }
}

function yatzi(){
    let yatziField = document.querySelector("#Yatzi");
    if(yatziField.disabled == false){

    let listeMedUdfald = calcCountsOFUdfald();
    let points = 0;

    for (let i = 1; i <= 6; i++){
        if (listeMedUdfald[i] == 5){
            points = 50;
        }
    }
    valuespecialfields[8] = points;
    yatziField.value = points;
    }
}

function tjekForEndGame(){
if(openSFields.includes(true) || openSpecialFields.includes(true)){
    //Do nothing.
    }else{
        console.log("Spillet er slut - mangler reset");
        
    }
}




























