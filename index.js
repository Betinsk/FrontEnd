const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const connection = require('./database/database')
const imate = require('./database/imate')
const person = require('./database/person')
const findCategory = require('./views/finds/findCategory')
const admin = require('./admin/adminController')

//database
/*
connection.authenticate()
.then(() => {
    console.log('conexão feita com o banco de dados')
}).catch((msgErro) => {
    console.log(msgErro)
})
*/
app.set('view engine', 'ejs')
//app.set('finds', 'finds');
//app.set('views', 'views');

//View engine


app.use(express.static('imagens'));
app.use(express.static('files'));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/', findCategory)
app.use('/', admin)


app.get('/', (req, res) => {
    res.render('index')
})

app.get('/sign', (req, res) => {
    res.render('sign')
})

app.get('/admin/register', (req, res) => {
    res.render('register')
})

app.get('/locations', (req, res) => {
    res.render('locations')
})

app.get('/woman', (req, res) => {
    res.render('woman')
})

app.get('/contactUs', (req, res) => {
    res.render('contactUs')
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
    var nome = req.params.name
    person.findOne({
        where: {name: nome}
    }).then(person => {
        console.log(person)
        if(person != undefined) {
            res.render('person',{
                person: person
        }) 
        } else {
            res.redirect('/')
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
        res.redirect('/admin/index')
    })
})

app.post('/admin/delet', (req, res) => {
    var id = req.body.id
    if(id != undefined) {
        if(id != isNaN(id)){
            imate.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.redirect('/find')
            })
        }
        } else {
            res.send('Não existe')
        }
    }) 

app.post('/registerPerson', (req, res) => {
    var email = req.body.email
    var password = req.body.password
    var name = req.body.personName
    var securityNumber = req.body.securityNumber
    var city = req.body.city
    var adress = req.body.adress
    var estate = req.body.estate
    var fone = req.body.fone
    var imateId = req.body.id

    person.create({
        email: email,
        password: password,
        name: name,
        securityNumber: securityNumber,
        city:city,
        adress: adress,
        estate: estate,
        foneNumber: fone,
        imateId: imateId
    }).then(()=>{
        res.redirect('/person/'+ name)
    })
})



app.listen(3000, () => {
    console.log('O servidor está rodando!')
})  

2411 