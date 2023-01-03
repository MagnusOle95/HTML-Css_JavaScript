const quotes = 'https://www.tronalddump.io/random/quote'
const tagquotes = 'https://www.tronalddump.io/tag/John%20Kasich'

async function getrandomQuotes(url) {
            try {
            let respons = await get(url);
            console.log(respons);
            let tag = respons.tags[0];
            console.log(tag)
            let OuterDiv = document.querySelector("#result");
            OuterDiv.innerHTML = "<div> <a onclick = getTagQuotes('"+tag+"')>Tag: # " + tag + " </a> </div>"
            OuterDiv.innerHTML = OuterDiv.innerHTML + "<div>" + " Tekst: " + respons.value + "</div>" 
            } catch (fejl) {
            console.log(fejl);
            } 
        
}

async function getTagQuotes(test){
    try {
        
        console.log(test);
        
        } catch (fejl) {
        console.log(fejl);
        } 
    // try {
    //     let respons = await get(tagquotes);
    //     console.log(respons);
    //     // let OuterDiv = document.querySelector("#result");
    //     // OuterDiv.innerHTML = "<div> <label onclick = test()>Tag: #" + respons.tags + "</label> </div>"
    //     // OuterDiv.innerHTML = OuterDiv.innerHTML + "<div>" + " Tekst: " + respons.value + "</div>" 
    //     } catch (fejl) {
    //     console.log(fejl);
    //     } 
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



