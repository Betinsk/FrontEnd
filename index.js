const express = require('express')
const app = express()

const bodyParser = require('body-parser')

//View engine
app.set('view engine', 'ejs')

app.use(express.static('imagens'));
app.use(express.static('files'));

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.get('/imates', (req, res) => {
    res.render('imates')
})

app.get('/locations', (req, res) => {
    res.render('locations')
})

app.get('/woman', (req, res) => {
    res.render('woman')
})


app.get('/work', (req, res) => {
    res.render('work')
})


app.listen(3000, () => {
    console.log('O servidor está rodando!')
})  