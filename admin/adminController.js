const express = require('express')
const router = express.Router()
const person = require('../database/person')
const Imate = require('../database/imate')

router.get('/admin/index', (req, res) => {
    res.render('../views/adminIndex')
})

router.get('/admin/findPerson', (req, res) => {
    res.render('finds/findPerson')
})

//Methods for editin Person
router.get('/admin/editPerson/:id', (req, res) => {
    var id = req.params.id

    if(isNaN(id)){
        res.render('finds/editPerson')  
    }

    person.findByPk(id).then(person => {
    if(person != undefined) {

        res.render('../views/editPerson', {
            person: person
        })

    } else {
        res.render('finds/findError')    }
    }).catch(erro => {
        res.redirect('/admin/categories')
})
})

router.post('/admin/updatePerson', (req, res) => {
    var id = req.body.id
    var email = req.body.email
    var name = req.body.name
    var securityNumber = req.body.securityNumber
    var city = req.body.city
    var adress = req.body.adress
    var estate = req.body.estate
    var fone = req.body.fone

    person.update({
        email: email,
        name: name,
        securityNumber: securityNumber,
        city:city,
        adress: adress,
        estate: estate,
        foneNumber: fone
    }, {
        where: {
            id: id
        }
    
    }).then(()=>{
        res.redirect('/person/'+ name)
    })
})



//Methods for editin imates
router.get('/admin/editImate/:id', (req, res) => {
    var id = req.params.id

    if(isNaN(id)){
        res.render('finds/findError')  
    }

Imate.findByPk(id).then(imate => {
    if(imate != undefined) {

        res.render('../views/editImate', {
            imate: imate
        })

    } else {
        res.render('finds/findError')    }
    }).catch(erro => {
        res.redirect('/admin/categories')
})
})

router.post('/findPerson', (req, res) => {
    var busca = req.body.name
    person.findOne({raw: true,
        where: {name: busca}
    }).then(person => {
        console.log(person)

        if(person != undefined) {
            res.render('../views/person', {
               person:person
            })
        } else {
            res.render('finds/findPersonError')
        }
    })

})

router.post('/admin/update', (req, res) => {
    var id = req.body.id
    var name = req.body.name
    var adress = req.body.adress
    var securityNumber = req.body.securityNumber
    var comitedCrime = req.body.crime
    var release = req.body.release
    Imate.update({
        name: name,
        adress: adress,
        securityNumber: securityNumber,
        comitedCrime: comitedCrime,
        dataOfRelease: release
    }, {
        where: {
            id: id
        }
    
    }).then(()=>{
        res.redirect('/admin/find')
    })
})


//Router of delet a imate
router.post('/admin/delet', (req, res) => {
    var id = req.body.id
    if(id != undefined) {
        if(id != isNaN(id)){
            Imate.destroy({
                where: {
                    id: id
                }
            }).then(() => {
                res.redirect('/admin/find')
            })
        }
        } else {
            res.send('Não existe')
        }
    }) 


module.exports = router;
