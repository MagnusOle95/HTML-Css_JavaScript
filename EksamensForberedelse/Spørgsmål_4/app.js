const express = require('express');
const app = express();
const session = require('express-session');

app.set('view engine', 'pug');
app.set('views', 'C:/HTML-Css_JavaScript-1/EksamensForberedelse/Spørgsmål_4');

app.use(express.static('filer'));
app.use(express.json());
app.use(session({secret: 'hemmelig', saveUninitialized: true, resave: true}));


app.get('/', function (request, response) {
    let personer = request.session.personer;
    if(personer == undefined){
        personer = [];
    }
    request.session.personer = personer;
    response.render("index", {personer: personer});
});

app.post('/tilfoejAdresse', function (request, response) {
    let personer = request.session.personer;
    if(personer == undefined){
        personer = [];
    }
    request.session.personer = personer;
    
    const { navn, adresse } = request.body;
    let nyperson = ({navn: navn, adresse: adresse}) 
    personer.push(nyperson)
    response.sendStatus(201)
    });

app.listen(8080);

console.log('Lytter på port 8080 ...');

//Gør rede for sessions. 
//Session storage is a popular choice when it comes to storing data on a browser. 
//It enables developers to save and retrieve different values. 
//Unlike local storage, session storage only keeps data for a particular session. 
//The data is cleared once the user closes the browser window.
