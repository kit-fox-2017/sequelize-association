const express = require('express')
const routers = express.Router()
const models = require('../models')

routers.get('/', (req, res) => {
  models.TeacherAssoc.belongsTo(models.SubjectAssoc, {foreignKey: 'id'})
  models.TeacherAssoc.findAll()
  .then(teacher => {
    res.render('teacher', {data: teacher, title: 'Teachers Page'})
  })
})

routers.get('/add', (req, res) => {
  models.TeacherAssoc.findAll({
    include: [{
      model: models.SubjectAssoc
    }]
  })
  .then(teacher => {
    res.render('teacherAdd', {data: teacher, title: 'Add Teacher Page'})
  })
})

routers.post('/add', (req, res) => {
  models.TeacherAssoc.build({
    first_name: `${req.body.fn}`,
    last_name: `${req.body.ln}`,
    email: `${req.body.email}`,
    createdAt: new Date()
  })
  .save().then(teacher => {
    res.redirect('/')
  })
})

module.exports = routers
