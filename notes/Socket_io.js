
const http = require("http");
const express = require('express');
const app = express();
const path = require('path');

const {Server} = require('socket.io');

const httpServer = http.createServer(app);
const io = new Server(httpServer);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/html/index.html'));
});


io.on('connection', (socket) => {
    console.log('New User connected ',socket.id);

    socket.emit('message', 'Welcome to the chat room');
})

httpServer.listen(5000, () => {
  console.log('Server is running on port 5000');
});

