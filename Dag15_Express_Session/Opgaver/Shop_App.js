
//laver express server. 
const port = 8080;
const express = require('express');
const app = express();

//Opretter view. 
let pug = require('pug');
let path = require('path');
const { request } = require('http');
const { response } = require('express');
app.set('view engine','pug');
app.set('views',path.join(__dirname, '/'));

const sessions = require('express-session');
app.use(sessions({ secret: 'hemmelig', saveUninitialized: true, cookie: { maxAge: 1000*60*20 }, resave: false }));
//app.use(express.static(__dirname + '/filer'));
app.use(express.json());

//Opretter liste af produkter. 
let produkter = [];
produkter.push({produktName: "Mælk", pris: 12, antal: 70, id: 0});
produkter.push({produktName: "Is", pris: 22, antal: 120, id: 1});
produkter.push({produktName: "Majs", pris: 6, antal: 52, id: 2});
produkter.push({produktName: "Dåsetun", pris: 15, antal: 100, id: 3});
produkter.push({produktName: "Pose kaffe", pris: 49.95, antal: 32, id: 4});

//Laver objekt der skal sendes med. 
let valueForTemplate = {name: "Array", produktArray: produkter};

//Metoder ved kald.
let placeholder;
app.get('/index',(request, response) => { 
    let produktId = request.session.produktId;
    valueForTemplate.produktId = produktId;
    response.render('Shop_index.pug',valueForTemplate);
    }
);

app.post('/buy',(request, response) => {
    const {id} = request.body;
    console.log(id);
    request.session.produktId = id;
    response.sendStatus(201);
})



app.listen(port);
console.log("Køre og bruger port: " + port);
