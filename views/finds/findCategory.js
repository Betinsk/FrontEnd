const express = require('express')
const router = express.Router()
const imate = require('../../database/imate')



router.get('/imates', (req, res) => {
    res.render('finds/imates')
})

router.get('/find', (req, res) => {
    imate.findAll({raw: true, order: [
        ['id','DESC']
    ]}).then(imates => {
        console.log(imates)
        res.render('finds/find', {
            imates: imates
        })
    })
})

router.post('/busca', (req, res) => {
    var busca = req.body.fin
    imate.findOne({raw: true,
        where: {securityNumber: busca}
    }).then(ima => {
        console.log(ima)

        if(ima != undefined) {
            res.render('finds/findOne', {
                ima: ima
            })
        } else {
            res.render('finds/findError')
        }
    })

})

module.exports = router