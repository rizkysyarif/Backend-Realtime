const route = require('express').Router()
const chitchat = require('./chitchat')

route.use('/chitchat', chitchat)

module.exports = route