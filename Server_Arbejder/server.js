const express = require("express")
const app = express();
let path = require('path'); //Kun vigtige fordi den ligger i mappe. 

app.set("view engine","ejs")
app.set('views', path.join(__dirname, '/views')); // kun vigtig da den ligger i mappe. 

let beskeder = [{ afsender: "Ole", tekst: "Min første besked", chatrum: "rum1", nummer: "1" }, { afsender: "Ib", tekst: "Hallo, er der nogen?", chatrum: "rum2", nummer: "2" }];
let chatRum = [{ navn: "rum1" }, { navn: "rum2" }];

let valueForView = {Chatrums: chatRum};

app.get("/",(reg,res) =>{
    console.log("Here")
    //res.send("hello")
    res.render('index',valueForView)
})

const userRouter = require('./routes/users')

app.use('/users', userRouter)

app.listen(9000);

