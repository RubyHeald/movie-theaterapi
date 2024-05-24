const express = require('express')
const { Show, User } = require('../models/index.js')

const router = express.Router()

// completed //

router.get('/', async function (request, response) {
    const shows = await Show.findAll()
        response.json(shows)
})

// completed //

router.get('/:id', async function (req, res) {
    const number = req.params.id
    const shows = await Show.findByPk(number)
    res.json(shows)
})

// router.put('/:showId/watched', async function (req, res) {})

// router.put('/:showId/updates', async function (req, res) {})

// router.delete('/:showId', async function (req, res) {})

module.exports = router
