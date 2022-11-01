const express = require('express');
const app = express();

const pug = require('pug');
const sessions = require('express-session');

app.set('view engine', 'pug');
app.set("views", __dirname + "/views");
app.use(express.json());
app.use(sessions({ secret: 'hemmelig', saveUninitialized: true, cookie: { maxAge: 1000*60*20 }, resave: false }));


app.get('/index', (request, response) => {
    let kurv = request.session.kurv;
    if (kurv == null){
        kurv = [];
    }
    let valuesForTemplate;
    let products = [{ id: 1, productname: "Fiskehjul", price: 489, color: "green" },
    { id: 2, productname: "Fiskestang", price: 589, color: "black" },
    { id: 3, productname: "Taske", price: 1489, color: "pink" }];
    let navn="Ole";
    valuesForTemplate= {kurv: kurv, products: products, navn};
    response.render('index', valuesForTemplate);
});

app.post('/buy', (request, response) => {
    const { id } = request.body;
    console.log(id)
    let kurv = request.session.kurv;
    if (kurv == null) {
        kurv = [];
    }
    kurv.push(id);
    request.session.kurv = kurv
    response.status(201).send(['købt']);
});

app.listen(8080);

console.log('Lytter på port 8080 ...');
