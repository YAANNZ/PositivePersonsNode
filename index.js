const express = require('express')
const app = express()
const indexRouter = require('./routes/index')
const homeRouter = require('./routes/home')

app.use('/', indexRouter)
app.use('/home', homeRouter)

app.listen(3000)

