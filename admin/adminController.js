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

router.get('/admin/editImate', (req, res) => {
    res.render('editImate')
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


module.exports = router;
