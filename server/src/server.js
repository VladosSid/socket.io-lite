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
const { log } = require("console");

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

    const adminData = {
      id: uuidv4(),
      nameUser: userName,
      message: ` connected for Chat.`, 
      owner: "ADMIN",
      status: 'connected',
      ROOMSMembers: ROOMS.members
    }

    ROOMS.messages.push(adminData)

    socket.broadcast.emit('ADMIN', adminData)
    socket.emit('ADMIN', adminData)
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

  socket.on('ExitUser', data => {
    console.log('EXIT', data);
    count -= 1
    console.log('disconnected', socket.client.id);

    ROOMS.members = ROOMS.members.filter(user => user.id !== socket.client.id)
    const adminData = {
      id: uuidv4(),
      nameUser: data,
      message: ` desconected for Chat.`, 
      owner: "ADMIN",
      status: 'disconnected',
      ROOMSMembers: ROOMS.members
    }

    ROOMS.messages.push(adminData)

    socket.broadcast.emit('ADMIN', adminData)
  })
  

  socket.on('ExidUser', data => {
    console.log('DESCONN', data);
  })

  socket.on('disconnect', () => {
    count -= 1
    console.log('disconnected', socket.client.id);

    let nameUser = 'unknown user'

    const index = ROOMS.members.findIndex(user => user.id === socket.client.id)
    if (index !== -1) {
      nameUser = ROOMS.members[index].name
    }

    ROOMS.members = ROOMS.members.filter(user => user.id !== socket.client.id)
    const adminData = {
      id: uuidv4(),
      nameUser,
      message: ` desconected for Chat.`, 
      owner: "ADMIN",
      status: 'disconnected',
      ROOMSMembers: ROOMS.members
    }

    ROOMS.messages.push(adminData)

    socket.broadcast.emit('ADMIN', adminData)
  })
});

server.listen(PORT_SOCKET, (err) => {
    if (err) {
        throw Error('Server SOCKEET not running: ', err.message)
    }
    console.log(`Server SOCKET listening on *:${PORT_SOCKET}`);
});

module.exports = io
