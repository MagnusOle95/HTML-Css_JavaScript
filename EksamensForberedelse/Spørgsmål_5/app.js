const express = require('express');
const app = express();
const session = require('express-session');

app.set('view engine', 'pug');
app.set('views', 'C:/HTML-Css_JavaScript-1/EksamensForberedelse/Spørgsmål_5');

app.use(express.static('filer'));
app.use(express.json());
app.use(session({secret: 'hemmelig', saveUninitialized: true, resave: true}));

//Laver liste med kontakter. 
let kontakter = [];

//Opretter kontakter og putter ind i listen.
let kontakt1 = {navn: "Per", telefonNummer: 20202020}; 
kontakter.push(kontakt1);
let kontakt2 = {navn: "Jens", telefonNummer: 30303030}; 
kontakter.push(kontakt2);
let kontakt3 = {navn: "Frank", telefonNummer: 40404040}; 
kontakter.push(kontakt3);
let kontakt4 = {navn: "Ole", telefonNummer: 80808080}; 
kontakter.push(kontakt4);


app.get('/', function (request, response) {
    response.render("index", {kontakter: kontakter});
});

app.post('/opdaterNummer', function (request, response) {
    const { gamleNummer, nyeNummer } = request.body;
    let found = false;
    let index = 0;
    if (nyeNummer != ""){
    while(!found && index < kontakter.length){
        if(kontakter[index].telefonNummer == gamleNummer){
            found == true;
            kontakter[index].telefonNummer = nyeNummer;
        }
        else{
            index++;
        }
    }
    }
    response.sendStatus(201)
    });

app.listen(8080);

console.log('Lytter på port 8080 ...');

//Gør rede for et event. 
//An event is a signal received by a program from the operating system as a result of some action taken by the user, 
//or because something else has happened. 
//Here are some examples: The user clicks a mouse button. The user presses a key on the keyboard.

