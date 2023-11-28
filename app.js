const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("public"));
/*
app.use(express.static(path.join(__dirname, 'public')));*/

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html"))
});
app.get('/carrito', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/productCart.html"))
});

app.get('/ingresa', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"))
});

app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'register.html'));
  });




app.listen(3030,()=>console.log("Levantando un servidor 3030"))