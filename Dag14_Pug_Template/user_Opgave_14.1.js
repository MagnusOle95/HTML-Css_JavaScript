
//Express server er, eksempel fra opgave 13.2

// userServer.js
const express = require('express');
const app = express();
const port = 8080;
let pug = require ('pug');
let path = require('path');

app.set('view engine','pug');
app.set('views',path.join(__dirname, '/'));
let values = {name: "Magnus", age: 27, adresse: "Risdalsvej 48"}
console.log(pug.renderFile(path.join(__dirname, '/userPugOpgave14.1.pug')));


app.get('/',(request, response) => response.render('userPugOpgave14.1.pug',values));
app.listen(port);
console.log('Lytter på port ' + port + ' ...');

