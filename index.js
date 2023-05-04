const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const connection = require('./database/database')
const imate = require('./database/imate')
const person = require('./database/person')

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

app.get('/registerPerson', (req, res) => {
    res.render('personRegister')
})

app.get('/person/:name', (req, res) => {
    var name = req.params.name
    person.findOne({
        where: {name: name}
    }).then(person => {
        if(person != undefined) {
            res.render('person',{
                person: person
        }) 
        } else {
            res.redirect('/')
        }
    })

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

app.post('/busca', (req, res) => {
    var busca = req.body.fin
    console.log('metodo executado')
    console.log('busca é ' + busca)

    imate.findOne({raw: true,
        where: {securityNumber: busca}
    }).then(ima => {
        console.log(ima)

        if(ima != undefined) {
            res.render('findOne', {
                ima: ima
            })
        } else {
            res.render('findError')
        }
    })

})

app.post('/register', (req, res) => {
    var name = req.body.name
    var adress = req.body.adress
    var securityNumber = req.body.securityNumber
    var comitedCrime = req.body.crime
    var release = req.body.release
    console.log(name)
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

app.post('/registerPerson', (req, res) => {
    var email = req.body.email
    var password = req.body.password
    var name = req.body.name
    var securityNumber = req.body.securityNumber
    var city = req.body.city
    var adress = req.body.adress
    var estate = req.body.estate
    var fone = req.body.fone
    console.log(name)
    person.create({
        email: email,
        password: password,
        name: name,
        securityNumber: securityNumber,
        city:city,
        adress: adress,
        estate: estate,
        foneNumber: fone,
    }).then(()=>{
        res.redirect('/person/'+ name)
    })
})



app.listen(3000, () => {
    console.log('O servidor está rodando!')
})  

2411 