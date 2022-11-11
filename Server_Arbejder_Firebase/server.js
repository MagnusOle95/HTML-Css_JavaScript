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
app.set('views',('Server_Arbejder_Firebase/views/'));

app.use(express.json());

//Firebase filer. 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, deleteDoc, addDoc, getDoc, query, where } from 'firebase/firestore'

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
const db = getFirestore(appFireBase);

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
app.post('/beskeder',async (request, response) => {
    let messageCol=collection(db, 'beskeder');
    let messages = await getDocs(messageCol);
    console.log(messages.docs[1])

    beskederForRum.length = 0;
    const { rumNavn } = request.body;
    for (let b of messages.docs){
        let besked = b._document.data.value.mapValue.fields
        if (besked.chatrum.stringValue == rumNavn){
            beskederForRum.push({afSender: besked.afsender.stringValue, tekst: besked.tekst.stringValue, beskedNr: besked.beskedNr.integerValue})
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

