//laver express server. 
const port = 9000;
import express from 'express'; //Ændret til import. ved brug af firebase
const app = express();

//Opretter view. 
let pug = import('pug');
let path = import('path');
const { request } = import('http');
const { response } = import('express');
app.set('view engine','pug');
app.set('views',path.join(__dirname, '/views'));

const sessions = import('express-session');
app.use(sessions({ secret: 'hemmelig', saveUninitialized: true, cookie: { maxAge: 1000*60*20 }, resave: false }));
//app.use(express.static(__dirname + '/filer'));
app.use(express.json());

//Firebase filer. 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCupa_D6i-6OvDBJ2pKXgl5FvqPrGVf-O0",
  authDomain: "chatsystem-21fea.firebaseapp.com",
  projectId: "chatsystem-21fea",
  storageBucket: "chatsystem-21fea.appspot.com",
  messagingSenderId: "279801090265",
  appId: "1:279801090265:web:6c13566a4208fb95ddeec8",
  measurementId: "G-9Y2MLVWWL1"
};

// Initialize Firebase
const appFireBase = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


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

