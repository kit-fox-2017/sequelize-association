const express = require('express')
const routers = express.Router()
const models = require('../models')

routers.get('/', (req, res) => {
  res.render('index')
})

module.exports = routers
