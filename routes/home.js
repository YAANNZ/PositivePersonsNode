const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
	res.send('hello, this is home')
})

module.exports = router