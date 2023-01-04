
const quotes = 'https://www.tronalddump.io/random/quote'
const tagquotes = 'https://www.tronalddump.io/tag/'

async function getrandomQuotes() {
            try {
            let respons = await get(quotes);
            let tag = respons.tags[0];
            let OuterDiv = document.querySelector("#result");
            OuterDiv.innerHTML = "<div id=demo onclick=myFunction()>" + tag + "</div>"
            OuterDiv.innerHTML = OuterDiv.innerHTML + "<div>" + respons.value + "</div>" 
            } catch (fejl) {
            console.log(fejl);
            } 
        
}

async function myFunction() {
    let tag = document.getElementById("demo").textContent;
    let splitTag = tag.split(" ");
    try {
        let respons = await get(tagquotes + splitTag[0] + "%20" + splitTag[1]);
        console.log(respons);
        } catch (fejl) {
        console.log(fejl);
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
getrandomQuotes();






