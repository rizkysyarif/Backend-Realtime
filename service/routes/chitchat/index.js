const route = require('express').Router()
const { Notification } = require('onesignal-node')
const { OneSignal } = require('./config')

route.post('/notification', (req, res) => {
    const { sender, receiver, text } = req.body
    OneSignal.sendNotification(new Notification({
        headings: {
            en: `New message from ${sender.name}`
        },
        contents: { en: text },
        include_player_ids: [receiver.device]
    })).then(() => {
        return res.status(200).send({
            code: 200,
            message: 'Notification sent.',
            error: false
        })
    }).catch(err => {
        console.log(err)
        return res.status(500).send({
            code: 500,
            message: `An error occured while sending notification. ${err.message}`,
            error: true
        })
    })
})

module.exports = route