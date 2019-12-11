const express = require('express')
const mongoose = require('mongoose')

const app = express()

require('dotenv').config()

const DATABASE = process.env.DATABASE
mongoose.connect(DATABASE, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: true
}).then(() => {
  console.log('DATABASE connected!')
})

app.get('/', (req, res) => {
  res.send('hello 1')
})

const port = process.env.PORT
app.listen(port, () => {
  console.log(`Run server at: http://localhost:${port}/`)
})
