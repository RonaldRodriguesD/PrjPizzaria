// importação das libs / frameworks

const express = require('express');
const fs = require("fs");
const path = require("path");

// criação do server
const app = express();

//criação end-points

app.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, 'templates/index.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro Interno");
        } else {
            res.status(200).type('text/html').send(data);
        }
    })
})

app.get('/*.png', (req, res) => {
    fs.readFile(path.join(__dirname, 'img/BonaiuteLogo.png'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro Interno");
        } else {
            res.status(200).type('image/png').send(data);
        }
    })
})

app.get('/cardapio', (req, res) => {
    fs.readFile(path.join(__dirname, 'templates/cardapio.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro Interno");
        } else {
            res.status(200).type('text/html').send(data);
        }
    })
})

app.get('/*.css', (req,res) => {
    fs.readFile(path.join(__dirname, 'styles/style.css'), (err, data) => {
        if (err) {
            res.status(500).send('500 - Erro interno do servidor' + err);
        } else {
            res.status(200).type('text/css').send(data);
        }
    })
})

app.get('/*.js', (req,res) => {
    fs.readFile(path.join(__dirname, 'js/cardapio.js'), (err, data) => {
        if (err) {
            res.status(500).send('500 - Erro interno do servidor' + err);
        } else {
            res.status(200).type('text/javascript').send(data);
        }
    })
})

app.get('/pedido', (req, res) => {
    fs.readFile(path.join(__dirname, 'templates/pedido.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro Interno");
        } else {
            res.status(200).type('text/html').send(data);
        }
    })
})

app.get('/confirmacao', (req, res) => {
    fs.readFile(path.join(__dirname, 'templates/confirmacao.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - Erro Interno");
        } else {
            res.status(200).type('text/html').send(data);
        }
    })
})

//configuração do server 

const port = 4500;
app.listen(port, ()=>{
    console.log("Servidor iniciado em http://localhost:4500")
})
