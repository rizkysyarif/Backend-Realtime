const service = require('./service/service')
const PORT = process.env.PORT || 3000

service.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}!`)
})