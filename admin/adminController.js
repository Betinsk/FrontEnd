const express = require('express')
const router = express.Router()

router.get('/admin/index', (req, res) => {
    res.render('../views/adminIndex')
})

module.exports = router;
