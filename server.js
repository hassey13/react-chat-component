var express = require('express')
var app = express()

var http = require('http').Server(app)
var io = require('socket.io')(http)


const users = []

function readUsers() {
  users.map( (user,i) => console.log(`Users connected: ${user}`) )
}

io.on('connection', function(socket){

  socket.on('link', function(msg){
    io.emit('link', msg)
    console.log(msg + ' connected!')
    users.push(msg)
    readUsers()
  })

  socket.on('chat message', function(msg){
    io.emit('chat message', msg)
    console.log('name: ' + msg.sender + ' - message: ' + msg.content)
  })
})

// start the server
const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'production';
http.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
})
