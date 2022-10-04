//Attributter. 
let myinterval;

//Sætter knapper op. 
document.querySelector("#start").onclick = startUr;
document.querySelector("#stop").onclick = stopUr;

//Start interval function.
function startUr(){
    myinterval = setInterval(visdato,1000);
}

//Stop interval function. 
function stopUr(){
    clearInterval(myinterval);
}

//Funktion der sætter timer. 
function visdato(){
    let timer = document.querySelector("#timer");
    let currentdate = new Date();
    timer.value = "Dato: " + currentdate.getFullYear() + ":" + currentdate.getMonth() + ":" + currentdate.getDay() + "   Tid: " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
}




