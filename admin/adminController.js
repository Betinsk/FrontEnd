const express = require('express')
const router = express.Router()
const person = require('../database/person')

router.get('/admin/index', (req, res) => {
    res.render('../views/adminIndex')
})

router.get('/admin/findPerson', (req, res) => {
    res.render('finds/findPerson')
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
