var express = require('express')
var app = express()

var http = require('http').Server(app)
var io = require('socket.io')(http)


// app.use(express.static(path.join(__dirname + '/css')));
// app.use(express.static('./static/style.css'))
// app.use(express.static('./bundle.js'))

app.use("/static/style.css", express.static(__dirname + '/static/style.css'));
app.use("/bundle.js", express.static(__dirname + '/bundle.js'));

app.get('/', function(req, res){
  res.sendfile('index.html')
});

io.on('connection', function(socket){
  console.log('CONNECTED')
})

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg)
    console.log('name: ' + msg.sender + ' - message: ' + msg.content)
  })
})

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
http.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});
