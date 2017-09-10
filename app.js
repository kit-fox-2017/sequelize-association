const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const index = require('./routes/index')
const teacher = require('./routes/teacher')
const subject = require('./routes/subject')
const student = require('./routes/student')

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', index)
app.use('/teacher', teacher)
app.use('/subject', subject)
app.use('/student', student)


app.listen(3000, (req, res) => {
  console.log(`AYO JALAN!`);
})
