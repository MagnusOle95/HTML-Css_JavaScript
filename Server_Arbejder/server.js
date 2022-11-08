const express = require("express")
const app = express();

let path = require('path'); //Kun vigtige fordi den ligger i mappe. 

app.set("view engine","pug")
app.set('views', path.join(__dirname, '/views')); // kun vigtig da den ligger i mappe. 


let beskeder = [{ afsender: "Ole", tekst: "Min første besked", chatrum: "rum1", nummer: "1" }, { afsender: "Ib", tekst: "Hallo, er der nogen?", chatrum: "rum2", nummer: "2" }];
let chatRum = [{ navn: "Rum1" }, { navn: "rum2" }];

let valueForView = {chatRooms: chatRum, messeges: beskeder};

app.get("/",(reg,res) =>{
    console.log("Here")
    //res.send("hello")
    res.render('index2',valueForView)
})

const userRouter = require('./routes/router')

app.use('/', userRouter)

app.listen(9000);

