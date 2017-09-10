const express = require('express')
const routers = express.Router()
const models = require('../models')

routers.get('/', (req, res) => {
  models.StudentAssoc.findAll()
  .then(student => {
    res.render('student', {data: student, title: 'Student Page'})
  })
  .catch(student => {
    res.send(student)
  })
})

routers.get('/add', (req, res) => {
  res.render('studentAdd')
})

routers.post('/add', (req, res) => {
  models.SubjectAssoc.build({
    first_name: `${req.body.fn}`,
    last_name: `${req.body.ln}`,
    email: `${req.body.email}`,
    createdAt: new Date()
  })
  .save().then(student => {
    res.redirect('/student')
  })
  .catch(err => {
    res.send(err)
  })
})

module.exports = routers
