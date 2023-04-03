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

app.listen(8080, () => {
    console.log('O servidor está rodando!')
})