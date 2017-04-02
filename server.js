var express = require('express')
var app = express()

var http = require('http').Server(app)
var io = require('socket.io')(http)


var users = []

function readUsers() {
  if (users.length === 0) {
    console.log("There are no connected users!")
    return false
  }
  console.log("Below are the connected users:")
  users.map( (user,i) => console.log(`${user}`) )
}

io.on('connection', function(socket){

  socket.on('userOnline', function(msg){
    io.emit('userOnline', msg)
    console.log(msg.name + ' connected!')
    users.push(msg.name)
    readUsers()
  })

  socket.on('userOffline', function(msg){
    io.emit('userOffline', msg)
    console.log(msg.name + ' disconnected!')
    users = users.filter( name => msg.name !== name )
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
