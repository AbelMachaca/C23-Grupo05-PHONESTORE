const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
});

app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'register.html'));
  });



  

app.use(express.static("public"));
app.listen(3030,()=>console.log("Levantando un servidor 3030"))