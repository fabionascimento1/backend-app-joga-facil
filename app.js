const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const expressValidator = require('express-validator')

const app = express()

require('dotenv').config()

const DATABASE = process.env.DATABASE
mongoose
  .connect(DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: true
  })
  .then(() => {
    console.log('DATABASE connected!')
  })

const authRoutes = require('./src/routes/auth')
const companyRoutes = require('./src/routes/company')
const sportscenter = require('./src/routes/sportscenter')

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(expressValidator())
app.use(cors())
app.use('/api', authRoutes)
app.use('/api', companyRoutes)
app.use('/api', sportscenter)

const port = process.env.PORT
app.listen(port, () => {
  console.log(`Run server at: http://localhost:${port}/`)
})
