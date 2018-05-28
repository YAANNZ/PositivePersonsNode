const express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('/allTasks', function (req, res) {
	fs.readFile('./tempData/allTasks.json', function(err, data){
		res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'})
		res.end(data)
	})
})

module.exports = router