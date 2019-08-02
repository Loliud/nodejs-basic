const express = require('express');
const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', (socket) =>{
    console.log('a user connected');
    socket.on('disconnect', () =>{
        console.log('user disconnected');
    });
})

server.listen(3000);


app.get('/', (req, res) =>{
    res.render('home');
});