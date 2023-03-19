const express = require('express')
const { auth } = require('../middlewares/auth')

const CV = require('../models/cv')

const router = express.Router()

router.post('/', async (req, res) => {
    const cvData = req.body
    console.log(cvData)
    const cv = await CV.create({
        ...cvData,
    })
    res.json(cv)
})

router.get('/', auth, async (req, res) => {
    const { email } = req.query
    const cv = await CV.findOne({ email })
    res.json({ message: 'ok', cv })
})

module.exports = router
