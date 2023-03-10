const express = require('express')
const about = require('./api/about')

const app = express()
const PORT = 4000

app.use('/api/about', about);

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

module.exports = app