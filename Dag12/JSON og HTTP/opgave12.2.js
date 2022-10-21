const alleChatrum = "https://beskedserver.azurewebsites.net/api/chatRum/";
const soegbeskedIRum = 'https://beskedserver.azurewebsites.net/api/SoegBeskeder/';
const beskedPost = 'https://beskedserver.azurewebsites.net/api/Beskeder/';

visrum(alleChatrum);
let aktuelRum;

async function visrum(url) {
    try {
        let respons = await get(url); //referere til filen, get.js
        console.log(respons)
        let tabel = document.querySelector("#tabel");
        for(let i = 0; i< respons.length; i++){
            tabel.innerHTML = tabel.innerHTML + "<tr> <input type=button onclick=visBeskeder('" + respons[i].navn + "') value =" + respons[i].navn +" ></input> </tr>"
        }
    } catch (fejl) {
        console.log(fejl);
 }
}

 async function visBeskeder(rum){
    try {
        aktuelRum = rum;
        let respons = await get(soegbeskedIRum + rum); //referere til filen, get.js
        let beskeder = document.querySelector("#beskeder");
        console.log(respons);
        let nyInnerHTML = "";
        for(let b of respons){
            nyInnerHTML = nyInnerHTML + "<br><label>"+ b.id +" "+ b.tekst +" "+ b.chatRum+ "</label><br>"
        }
        beskeder.innerHTML = nyInnerHTML; //Viser kun de beskeder jeg ønsker fra den bestemte chat. 

    } catch (fejl) {
        console.log(fejl);
 }
 let ButtonOgTekstField = document.querySelector("#buttonOgTekstField");
 ButtonOgTekstField.innerHTML = " <br/> <label>Tekst</label> <input type=text id=tekstField value =" + "" + "> <input type=button value=Opret onclick=postBesked()>"
    
 }


async function postBesked() {
    let tekst = document.querySelector("#tekstField").value;
    let besked = { Tekst: tekst, ChatRum: aktuelRum};
    try {
        let respons = await post(beskedPost,besked);
        console.log(respons);
    } catch (fejl) {
        console.log(fejl);
    }
    visBeskeder(aktuelRum);
}

async function post(url, objekt) {
    const respons = await fetch(url, {
        method: "POST",
        body: JSON.stringify(objekt),
        headers: { 'Content-Type': 'application/json' }
    });
    if (respons.status !== 204) // Created
        throw new Error(respons.status);
    return await respons.text();
}




