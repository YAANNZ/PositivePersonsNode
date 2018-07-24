const express = require('express')
const app = express()
const indexRouter = require('./routes/index')
const homeRouter = require('./routes/home')
const optionsRouter = require('./routes/options')

app.use('/', indexRouter)
app.use('/home', homeRouter)
app.use('/options', optionsRouter)

app.use(function (req, res) {
	if (!res.headerSent) {
		res.writeHead(404, {"Content-Type":"text/html;charset=UTf-8"})
		res.end('some wrong')
	}
})

app.listen(3000)
