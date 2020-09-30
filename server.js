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

require('dotenv').config();
const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);
const path = require('path')

app.use(express.static('build'))

app.get('*', (req, res)=>{
    res.sendFile(path.join(`${__dirname}/build/index.html`))
})

const PORT = process.env.PORT || 3000
app.listen(PORT)