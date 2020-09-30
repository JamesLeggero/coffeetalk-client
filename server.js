// const express = require('express')
// const app = express()
// const path = require('path')
// const PORT = process.env.PORT || 3000

// app.use(express.static('build'))

// app.get('*', (req, res)=>{
//     res.sendFile(path.join(`${__dirname}/build/index.html`))
// })

// //test

// app.listen(PORT)

import openSocket from 'socket.io-client'
const url = 'https://jml-coffeetalk-client.herokuapp.com/'
const socket = openSocket(url)
require('dotenv').config();
const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
// const socket = require("socket.io");
// const io = socket(server);
const path = require('path')

socket.on('connect', () => {
    console.log('conneted to', url)
})

app.use(express.static('build'))

app.get('*', (req, res)=>{
    res.sendFile(path.join(`${__dirname}/build/index.html`))
})

const PORT = process.env.PORT || 3000
app.listen(PORT)