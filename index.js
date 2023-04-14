const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const connection = require('./database/database')
//database

connection.authenticate()
.then(() => {
    console.log('conexão feita com o banco de dados')
}).catch((msgErro) => {
    console.log(msgErro)
})

//View engine
app.set('view engine', 'ejs')

app.use(express.static('imagens'));
app.use(express.static('files'));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

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

app.post('/register', (req, res) => {
    var email = req.body.email
    res.send('register success ' + email)
})

app.listen(3000, () => {
    console.log('O servidor está rodando!')
})  