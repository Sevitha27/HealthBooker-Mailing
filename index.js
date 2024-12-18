const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')

const app = express()
const PORT = 8001

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors({
    origin:["https://safwanspehere.online", "http://localhost:3000"],
    methods:"GET,PUT,POST,DELETE",
    credentials: true
}))

app.use('/', require('./routes/router'))

app.listen(PORT, () =>{
    console.log(`Server Listening on Port ${PORT}`)
})