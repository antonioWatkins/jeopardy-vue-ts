const express = require('express')
const dotenv = require('dotenv').config()
require('colors')

const {errorHandler} = require('./middleware/errorMiddleware')



const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))



app.use(errorHandler)


module.exports = app