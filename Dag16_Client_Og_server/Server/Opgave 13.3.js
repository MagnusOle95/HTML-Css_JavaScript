//const express = require('express');
import express from 'express';
const app = express();

//Firebase--------------------------------------------------------------------
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, deleteDoc, addDoc, getDoc, query, where } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCTP7Y1J_anD5m8Pfoaq7HheJnXn-iWt8",
  authDomain: "dag16databasechatserver.firebaseapp.com",
  projectId: "dag16databasechatserver",
  storageBucket: "dag16databasechatserver.appspot.com",
  messagingSenderId: "237560527686",
  appId: "1:237560527686:web:808ac1fce39bfd52678347",
  measurementId: "G-62F7H3HYD6"
};

// Initialize Firebase
const appFireBase = initializeApp(firebaseConfig);
const db = getFirestore(appFireBase);


//Firebase funktioner. 
async function getChatRooms(){
    let chatCol=collection(db,'ChatRum');
    let chatRum = await getDocs(chatCol);

    let ChatRoomList = chatRum.docs.map(doc =>{
        let data = doc.data();
        data.docID = doc.id;
        return data;
    })
    return ChatRoomList;
}


//-------------------------------------------------------------------------

const port = 8000;
let beskeder = [{ afsender: "Ole", tekst: "Min første besked", chatrum: "rum1", nummer: "1" }, { afsender: "Ib", tekst: "Hallo, er der nogen?", chatrum: "rum2", nummer: "2" }];
let chatRum = [{ navn: "rum1" }, { navn: "rum2" }];

//Tillad cors requests
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.json());

app.get('/beskeder', (request, response) => {
    response.status(200);
    response.send(beskeder);
});

app.get('/beskeder/:chatrum', (request, response) => {
    response.status(200);
    let result = [];
    for (let besked of beskeder) {
        if (besked.chatrum == request.params.chatrum) {
            result.push(besked);
        }
    }
    response.send(result);
});
app.get('/chatrum', async (request, response) => {
    response.status(200);
    const chatRooms = await getChatRooms();
    response.send(chatRooms);

});

app.post('/beskeder', (request, response) => {
    console.log(request.body);
    //løkke, der finder største id i beskeder
    // sæt størsteid + 1 på besked
    beskeder.push(request.body);
    response.status(201);
    response.send("Added");
});

app.listen(port);

console.log('Lytter på port ' + port + ' ...');