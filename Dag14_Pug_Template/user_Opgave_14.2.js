
//Express server er, eksempel fra opgave 13.2

// userServer.js
const express = require('express');
const app = express();
const port = 8080;
let pug = require ('pug');
let path = require('path');

app.set('view engine','pug');
app.set('views',path.join(__dirname, '/'));

let users = [];
users.push({name: "Magnus", age: 27, adresse: "Risdalsvej 48"});
users.push({name: "Mården", age: 32, adresse: "No idea street"});
users.push({name: "Bent", age: 50, adresse: "KalundborgsVej"});
users.push({name: "Mauda", age: 60, adresse: "LundeVænget"});
users.push({name: "Mila", age: 18, adresse: "TøløseVej"});
console.log(users);
let valueForTemplate = {name: "Array", usersArray: users};

console.log(pug.renderFile(path.join(__dirname, '/userPugOpgave14.2.pug'),valueForTemplate));

app.get('/',(request, response) => response.render('userPugOpgave14.2.pug',valueForTemplate));
app.listen(port);
console.log('Lytter på port ' + port + ' ...');

