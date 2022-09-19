
let inputs = document.querySelectorAll("input");

for(let input of inputs){
    input.outerHTML = "<Label id = l" + input.id + ">" + input.id + "</Label>" + input.outerHTML
}



function talFunction(id){
    let randomNumber = Math.floor(Math.random() * 1000)
    return () => document.querySelector(id).value = randomNumber;
}

let talRandom = document.querySelector("#tal");
talRandom.onclick = talFunction("#tal");
let talRandoml = document.querySelector("#ltal");
talRandoml.onclick = talFunction("#tal")




function tidFunction(id){
    let current = new Date();
    let currentTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    return () => document.querySelector(id).value = currentTime;
}
let tidRandom = document.querySelector("#tid");
tidRandom.onclick = tidFunction("#tid");
let tidRandoml = document.querySelector("#ltid");
tidRandoml.onclick = tidFunction("#tid");













