var express = require('express')
var app = module.exports = express.createServer()
var io = require('socket.io')

app.use(express.static(__dirname + '/public'))
app.set('view options', { layout: false })
<<<<<<< HEAD
app.get('/a', function(req, res) {
	res.render('a.jade')
=======
app.get('/telephone', function(req, res) {
	res.render('telephone_index.jade')
})
app.get('/telephone/:room', function(req, res) {
	res.render('telephone.jade' , {title: req.params.room})
>>>>>>> 15436ce29fcfff2a28d2fb2561f77d8f8aa8c253
})
app.listen(process.env.PORT || 8001)

var io = io.listen(app)
<<<<<<< HEAD
var nicknames = {}
io.sockets.on('connection', function(socket) {
	socket.on('user message', function(msg) {
		socket.broadcast.emit('user message', socket.nickname, msg)
=======
io.set("log level", 1)
var nicknames = {}
io.sockets.on('connection', function(socket) {
	var currentRoom = null
	socket.on('user message', function(msg) {
		socket.broadcast.to(currentRoom).emit('user message', socket.nickname, msg)
	})
	socket.on('sample data', function(msg) {
		socket.broadcast.to(currentRoom).emit('sample data', socket.nickname, msg)
	})
	socket.on('microphone', function(msg) {
		socket.broadcast.to(currentRoom).emit('microphone', socket.nickname, msg)
>>>>>>> 15436ce29fcfff2a28d2fb2561f77d8f8aa8c253
	})
	socket.on('nickname', function(nick, fn) {
		if (nicknames[nick]) {
			fn(true)
		} else {
			fn(false)
<<<<<<< HEAD
			nicknames[nick] = socket.nickname = nick
			socket.broadcast.emit('announcement', nick + ' connected')
			io.sockets.emit('nicknames', nicknames)
		}
	})
	socket.on('disconnect', function () {
		if (!socket.nickname) return
		delete nicknames[socket.nickname]
		socket.broadcast.emit('announcement', socket.nickname + ' disconnected')
		socket.broadcast.emit('nicknames', nicknames)
=======
			if(!nicknames[currentRoom]) nicknames[currentRoom] = {}
			nicknames[currentRoom][nick] = socket.nickname = nick
			socket.broadcast.to(currentRoom).emit('announcement', nick + ' connected')
			io.sockets.in(currentRoom).emit('nicknames', nicknames[currentRoom])
		}
	})
	socket.on('room', function(room) {
		socket.join(room)
		currentRoom = room
	})
	socket.on('disconnect', function () {
		if (!socket.nickname) return
		delete nicknames[socket.nickname]
		socket.broadcast.to(currentRoom).emit('announcement', socket.nickname + ' disconnected')
		socket.broadcast.to(currentRoom).emit('nicknames', nicknames)
>>>>>>> 15436ce29fcfff2a28d2fb2561f77d8f8aa8c253
	})
})
