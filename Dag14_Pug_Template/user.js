
//Express server er, eksempel fra opgave 13.2

// userServer.js
const express = require('express');
const app = express();
const fetch = require('node-fetch');
const port = 8080;
let pug = require ('pug');
let path = require('path');

app.set('view engine','pug');
app.set('Dag14_Pug_Template',path.join(__dirname, '/Dag14_Pug_Template'));


let values = {name: "Magnus", age: 27, adresse: "Risdalsvej 48"}

console.log(pug.renderFile(Path.join(__dirname, '/Dag14_Pug_Template/userPug.pug')));

//app.get('/',(request, response) => response.render('userPug'));


// app.listen(port);
// console.log('Lytter på port ' + port + ' ...');

