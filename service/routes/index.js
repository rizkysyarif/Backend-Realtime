const route = require('express').Router()
const citchat = require('./citchat')

route.use('/citchat', citchat)

module.exports = route