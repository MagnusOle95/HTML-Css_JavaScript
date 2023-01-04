const quotes = 'https://www.tronalddump.io/random/quote'

function getrandomQuotes(url,antal) {
    let promishArray = [];
    for (let i = 0; i < antal; i++) {
        let respons = get(url);
        promishArray.push(respons);
        console.log(respons);
    }
    let textDiv = document.querySelector("#Text");
    let i = 1;
    Promise.all(promishArray)
        .then((values) => {
            for (let quote of values) {
                textDiv.innerHTML = textDiv.innerHTML + "<div>" + "Nr: " + i + "<br> Tag: " + quote.tags + "<br>Tekst: " + quote.value + "</div><br>"
                i++;
            }
        })
        .catch((error) => {
            textDiv.innerHTML = "<div> Fejl </div>"
        });
}

function getrandomQuotesButton(){
    let textDiv = document.querySelector("#Text");
    textDiv.innerHTML = ""
    let antal = document.querySelector("#antal")
    console.log(antal.value)
    getrandomQuotes(quotes,antal.value);
}

//Funktioner. 
async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

async function post(url, objekt) {
    const respons = await fetch(url, {
        method: "POST",
        body: JSON.stringify(objekt),
        headers: { 'Content-Type': 'application/json' }
    });
    if (respons.status !== 201) // Created
        throw new Error(respons.status);
    return await respons.text();
}

//Køre funktionen. 
getrandomQuotes(quotes,3);

//Hvorfor asynkron metode. 
//Async: It simply allows us to write promises-based code as if it was synchronous 
// and it checks that we are not breaking the execution thread. 
// It operates asynchronously via the event loop. Async functions will always return a value

//redeføre for promishes. 
// A promise is a JavaScript object that allows you to make asynchronous(aka async) calls. 
// It produces a value when the async operation completes successfully or produces an error if it doesn't complete. 
// let promise = new Promise(function(resolve, reject) { // Do something and either resolve or reject });


