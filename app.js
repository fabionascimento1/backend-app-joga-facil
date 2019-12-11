const express = require('express')
const app = express()

require('dotenv').config()

app.get('/', (req, res) => {
  res.send('hello 1')
})

const port = process.env.PORT
app.listen(port, () => {
  console.log(`Run server at: http://localhost:${port}/`)
})
