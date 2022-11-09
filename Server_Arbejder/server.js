//laver express server. 
const port = 9000;
const express = require('express');
const app = express();

//Opretter view. 
let pug = require('pug');
let path = require('path');
const { request } = require('http');
const { response } = require('express');
app.set('view engine','pug');
app.set('views',path.join(__dirname, '/views'));

const sessions = require('express-session');
app.use(sessions({ secret: 'hemmelig', saveUninitialized: true, cookie: { maxAge: 1000*60*20 }, resave: false }));
//app.use(express.static(__dirname + '/filer'));
app.use(express.json());


//Besked liste 
let beskederForRum = [];

//attribut 
let beskedNrCount = 2

//Liste over rum og beskeder. 
let beskeder = [{ afsender: "Ole", tekst: "Min første besked", chatrum: "Rum1", beskedNr: 0}, { afsender: "Ib", tekst: "Hallo, er der nogen?", chatrum: "Rum2", beskedNr: 1}];
let chatRum = [{ navn: "Rum1" }, { navn: "Rum2" }];

let valueForView = {chatRooms: chatRum, messeges: beskederForRum};

app.get("/",(request,response) =>{
    response.render('index',valueForView)
})

//-------------------------------------------------------------------------------------------------
app.post('/beskeder', (request, response) => {
    beskederForRum.length = 0;
    const { rumNavn } = request.body;
    for (let b of beskeder){
        if (b.chatrum == rumNavn){
            beskederForRum.push({afSender: b.afsender, tekst: b.tekst, beskedNr: b.beskedNr})
        }
    }
    response.sendStatus(201);
})

app.post('/opretbesked', (request, response) => {
    const { textFromUser, userName, OensketRum } = request.body;
    beskeder.push({ afsender: userName, tekst: textFromUser, chatrum: OensketRum, beskedNr: beskedNrCount})
    beskedNrCount++;
    response.sendStatus(201);
})

app.post('/sletBesked', (request, response) => {
    const { beskedId } = request.body;
    let index = beskeder.findIndex(object => {
        return object.beskedNr == beskedId;
      });
      beskeder.splice(index, 1);
      
    console.log(index)
    response.sendStatus(201)

})


app.listen(port);

