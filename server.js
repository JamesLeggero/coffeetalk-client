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

const rooms = {};

io.on("connection", socket => {
    socket.on("join room", roomID => {
        if (rooms[roomID]) {
            rooms[roomID].push(socket.id);
        } else {
            rooms[roomID] = [socket.id];
        }
        const otherUser = rooms[roomID].find(id => id !== socket.id);
        if (otherUser) {
            socket.emit("other user", otherUser);
            socket.to(otherUser).emit("user joined", socket.id);
        }
    });

    socket.on("offer", payload => {
        io.to(payload.target).emit("offer", payload);
    });

    socket.on("answer", payload => {
        io.to(payload.target).emit("answer", payload);
    });

    socket.on("ice-candidate", incoming => {
        io.to(incoming.target).emit("ice-candidate", incoming.candidate);
    });
});



app.use(express.static('build'))

app.get('*', (req, res)=>{
    res.sendFile(path.join(`${__dirname}/build/index.html`))
})

const PORT = process.env.PORT || 3000
server.listen(PORT)