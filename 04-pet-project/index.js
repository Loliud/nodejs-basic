const express = require('express');
const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');
const server = require('http').createServer(app);
const io = require('socket.io')(server);


io.emit('server-send-message', { for: 'everyone' });

io.on('connection', (socket) =>{
    console.log('a user connected');
    socket.on('disconnect', () =>{
        console.log('user disconnected');
    });

    socket.on('chat-message', (data) =>{
        console.log(data);
        io.sockets.emit('server-send-message', data);
    });
})

server.listen(3000);


app.get('/', (req, res) =>{
    res.render('home');
});