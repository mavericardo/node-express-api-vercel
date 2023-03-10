
const express = require('express')
const routes = require('./routes')

const app = express()
const PORT = 4000

app.use(routes)

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

module.exports = app