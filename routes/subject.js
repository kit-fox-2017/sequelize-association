const express = require('express')
const routers = express.Router()
const models = require('../models')

routers.get('/', (req, res) => {
  models.SubjectAssoc.findAll()
  .then(subject => {
    res.render('subject', {data: subject, title: 'Subject Page'})
  })
})

routers.get('/add', (req, res) => {
  res.render('subjectAdd')
})

routers.post('/add', (req, res) => {
  models.SubjectAssoc.build({
    subject_name: `${req.body.sn}`
  })
  .save().then(subject => {
    res.redirect('/subject')
  })
})

module.exports = routers
