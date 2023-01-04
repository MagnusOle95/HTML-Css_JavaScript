const quotes = 'https://www.tronalddump.io/random/quote'

async function getrandomQuotes(url) {
    for(let i = 0; i < 3; i++){
            try {
            let respons = await get(url);
            console.log(respons);
            let OuterDiv = document.querySelector("#result");
            OuterDiv.innerHTML = OuterDiv.innerHTML + "<div>" +"Nr: " + i + " Tekst: " + respons.value + "</div>" 
            } catch (fejl) {
            console.log(fejl);
            } 
        }
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
getrandomQuotes(quotes);



