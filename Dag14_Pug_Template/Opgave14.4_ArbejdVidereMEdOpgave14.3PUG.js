const url = "https://randomuser.me/api/?nat=dk&results=100"
//Express server er, eksempel fra opgave 13.2

// userServer.js
const express = require('express');
const app = express();
const port = 8080;
let pug = require ('pug');
let path = require('path');
const fetch = require('node-fetch');

app.set('view engine','pug');
app.set('views',path.join(__dirname, '/'));


async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

app.get ('/',async (request, response) => {
    let users = await get(url);
    console.log(users);
    let valueForTemplate = {name: "Array", usersArray: users.results};
    //console.log(pug.renderFile(path.join(__dirname, '/Opgave14_3_HentDataFraNetIndIPUG'),valueForTemplate));
    response.render('Opgave14_4_ArbejdVidereMEdOpgave14_3PUG',valueForTemplate);   
}
);
app.listen(port);
console.log('Lytter på port ' + port + ' ...');

