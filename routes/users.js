const express = require('express')
const { User, Show } = require('../models/index.js')

const router = express.Router()

router.get('/', async function (req, res) {})

router.get('/:userId', async function (req, res) {})

router.get('/:userId/shows', async function (req, res) {})

router.put('/:userId/shows/:showId', async function (req, res) {})

module.exports = router
