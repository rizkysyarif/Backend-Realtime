require('dotenv').config()
const OneSignal = require('onesignal-node')

exports.OneSignal = new OneSignal.Client({
    userAuthKey: process.env.ONESIGNAL_AUTH_KEY,
    app: {
        appAuthKey: process.env.ONESIGNAL_AUTH_KEY,
        appId: process.env.ONESIGNAL_APP_ID
    }
})