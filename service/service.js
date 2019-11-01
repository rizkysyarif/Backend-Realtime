const express = require('express')
const serverless = require('serverless-http')
const routes = require('./routes')

const service = express()

service.use(express.urlencoded({ extended: true }))
service.use(express.json())
service.use('/.netlify/functions/service', routes) // original lambda path : /.netlify/functions/index

service.use('*', (req, res) => {
    res.status(404).send({
        code: 404,
        status: 'Not Found.',
        message: `Cannot ${req.method} ${req.url}`
    })
})

module.exports = service
module.exports.handler = serverless(service)