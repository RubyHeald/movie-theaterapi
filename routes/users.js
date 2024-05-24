const express = require('express')
const { User, Show } = require('../models/index.js')

const router = express.Router()

// completed //

router.get('/', async function (request, response) {
    const users = await User.findAll()
        response.json(users)
})

// completed //

router.get('/:id', async function (req, res) {
    const number = req.params.id
    const users = await User.findByPk(number)
    res.json(users)
})

// not connecting to the server //
router.get('/:id/shows', async function (req, res) {
    const user = await User.findByPk(req.params.id, { include: Show })
    res.json(user.shows)
})

module.exports = router
