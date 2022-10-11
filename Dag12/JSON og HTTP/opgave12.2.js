const alleChatrum = "https://beskedserver.azurewebsites.net/api/chatRum/"

visrum(alleChatrum);
document.querySelector("#0").onclick = visBeskeder;

async function visrum(url) {
    try {
        let respons = await get(url); //referere til filen, get.js
        console.log(respons)
        let tabel = document.querySelector("#tabel");
        for(let i = 0; i< respons.length; i++){
              tabel.innerHTML = tabel.innerHTML + "<tr id=" + i +"> " + respons[i].navn + "</tr>"
        }
    } catch (fejl) {
        console.log(fejl);
 }
}

async function visBeskeder(){
    try {
        let respons = await get("https://beskedserver.azurewebsites.net/api/SoegBeskeder/{rum}"); //referere til filen, get.js
        //console.log(respons)
        console.log("Test")
        //let tabel = document.querySelector("#tabel");
        //
    } catch (fejl) {
        console.log(fejl);
 }
}

