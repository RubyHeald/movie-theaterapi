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

// completed //

router.put('users/:id', async function (req, res) {
    const updatedRest = await User.update(req.body, { where: { id: req.params.id } })
    res.json(updatedRest)
})

// compelted //
router.put('/:id/shows/:showid', async function (req, res) {
    const user = await User.findByPk(req.params.userid)
    const show = await Show.findByPk(req.params.showid)
    await user.addShow(show)
    res.json('Show Updated!')
})

module.exports = router
