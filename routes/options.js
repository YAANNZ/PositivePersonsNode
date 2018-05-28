const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
	res.send('hello, this is options')
})

module.exports = router