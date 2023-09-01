const express = require("express");
const http = require('http');
const { Server } = require("socket.io");
const cors = require('cors');

const app = express()
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  }
});

const { v4: uuidv4 } = require('uuid');

const PORT_SOCKET = 5050

app.use(express.json());
app.use(cors());

const ROOMS = require('./data/dataChat');
const { disconnect } = require("process");

let count = 1 
io.on('connection', (socket) => {
  console.log('connected', count, '-', socket.client.id);
  count += 1

  // connected user to socket
  socket.emit('connected', 'User conected!!!+ 1')
  
  // join user
  socket.on('join', userName => {
    ROOMS.members.push({
      id: socket.client.id,
      name: userName
    })
    
    io.emit('joinUser', ROOMS)

    socket.broadcast.emit('ADMIN', {
      id: uuidv4(),
      message: `${userName} conected for Chat.`,
      owner: "ADMIN",
    })
  })

  // send message user
  socket.on('message', data => {
    const messageData = {
      id: uuidv4(),
      message: data.message,
      owner: data.username,
    }
    ROOMS.messages.push(messageData)

    io.emit('messageUser', messageData)

    // io.broadcast.emit('message', messageData)
  })

  socket.on('disconnect', () => {
    count -= 1
    console.log('disconnected', socket.client.id);
    ROOMS.members = ROOMS.members.filter(user => user.id !== socket.client.id)
  })
});

server.listen(PORT_SOCKET, (err) => {
    if (err) {
        throw Error('Server SOCKEET not running: ', err.message)
    }
    console.log(`Server SOCKET listening on *:${PORT_SOCKET}`);
});

module.exports = io
