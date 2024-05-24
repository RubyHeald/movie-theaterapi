const express = require('express')
const router = express.Router()
const { Show } = require('../models')
const { check, validationResult } = require('express-validator')

// GET /shows
router.get('/', async (req, res) => {
    const shows = await Show.findAll()
    res.json(shows)
})

// GET /shows/:id
router.get('/:id', async (req, res) => {
    const show = await Show.findByPk(req.params.id)
    res.json(show)
})

// GET shows of a particular genre
router.get('/genre/:genre', async (req, res) => {
    const shows = await Show.findAll({ where: { genre: req.params.genre } })
    res.json(shows)
})

// // PUT update rating of a show
// router.put('/:id/rating', [check('rating').notEmpty(options = { ignore_whitespace: true }).isInt()], async (req, res) => {
//     const errors = validationResult(req);
//     const show = await Show.findByPk(req.params.id)
//     if (errors.isEmpty()) {
//         if (show) {
//             show.rating = req.body.rating
//             await show.save()
//             res.json(show)
//         } else {
//             res.status(404).send('Not found')
//         };
//     } else {
//         res.status(400).json({ errors: errors.array() })
// }
// })

// PUT update available param> url
// router.put('/:id/status', async (req, res) => {
//     show = await Show.findByPk(req.params.id)
//         show.available = !show.available
//         await Show.save()
//         res.json(show)
// })

// DELETE a show
router.delete('shows/:id', async (req, res) => {
    const deletedRest = await Show.destroy({ where: { id: req.params.id } })
    res.json(deletedRest)
})

module.exports = router