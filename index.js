const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const connection = require('./database/database')
const imate = require('./database/imate')
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

app.get('/sign', (req, res) => {
    res.render('sign')
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

app.get('/test', (req, res) => {
    res.render('test')
})

app.get('/work', (req, res) => {
    res.render('work')
})

app.get('/aboutus', (req, res) => {
    res.render('aboutUs')
})

app.get('/find', (req, res) => {
    imate.findAll({raw: true, order: [
        ['id','DESC']
    ]}).then(imates => {
        console.log(imates)
        res.render('find', {
            imates: imates
        })
    })
})


app.get('/findOne', (req, res) => {
    var fin = req.body.fin
    console.log(fin)

    imate.findOne({
        where: {
            id: fin
          }
    }).then(imates => {
        console.log(imates)

        if(imates != undefined) {
            res.render('findOne')
        } else {
            res.redirect('index')
        }
    })

})

app.post('/register', (req, res) => {
    var name = req.body.name
    var adress = req.body.adress
    var securityNumber = req.body.securityNumber
    var comitedCrime = req.body.crime
    var release = req.body.release
    imate.create({
        name: name,
        adress: adress,
        securityNumber: securityNumber,
        comitedCrime: comitedCrime,
        dataOfRelease: release
    }).then(()=>{
        res.redirect('/')
    })
})

app.listen(3000, () => {
    console.log('O servidor está rodando!')
})  

