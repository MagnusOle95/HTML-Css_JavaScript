
// userServer.js
const express = require('express');
const app = express();
const fetch = require('node-fetch');
const userUrl = 'https://jsonplaceholder.typicode.com/users';
const port = 8081;
const alleChatrum = "https://beskedserver.azurewebsites.net/api/chatRum/";
const soegbeskedIRum = 'https://beskedserver.azurewebsites.net/api/SoegBeskeder/';
const beskedPost = 'https://beskedserver.azurewebsites.net/api/Beskeder/';

let aktuelRum;

async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

function genererTabel(chatRooms) {
    id = 1;
    let html = '<table>';
    for (room of chatRooms) {
        html += "<tr> <input id=ID"+ id +" type=button onclick=visBeskeder('" + room.navn + "') value =" + room.navn +" ></input> </tr>";
        id++;
    }
    html += '</table>';
    return html;
}

async function visBeskeder(rum){
    console.log("Test")
    // aktuelRum = rum;
    // let respons = await get(soegbeskedIRum + rum);
    // let html = '<div>';
    // for(let b of respons){
    //     nyInnerHTML += "<br><label>"+ b.id +" "+ b.tekst +" "+ b.chatRum+ "</label><br>"
    // }
    // html += '</div>';
}

app.get('/', async (request, response) => {
    try {
        let chatRooms = await get(alleChatrum);
        let html = genererTabel(chatRooms);
        response.writeHead(200, { "Content-Type": "text/html" }); // OK
        response.write(html);
        response.send();
    } catch (fejl) {
        if (typeof fejl.message === 'number')
            response.writeHead(fejl.message);
        else
            response.writeHead(400); // Bad Request
        response.write(fejl.name + ": " + fejl.message);
    }
});

app.listen(port);
console.log('Lytter på port ' + port + ' ...');



