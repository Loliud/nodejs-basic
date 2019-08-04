const express = require('express');
const app = express();
const server = require('http').createServer(app);
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');
const io = require('socket.io')(server);


let users = ['ken'];

io.on('connection', (socket) =>{
    console.log(socket.id + ': connected');
    socket.on('create-user', (data) =>{
        if(checkUser(data, users) === false){
            socket.emit('create-user-fail', 'User da bi trung');
        }else{
            users.push(data);
            io.sockets.emit('user-online', users);
            socket.broadcast.emit('newUser-connected', data);
        }
    });

    socket.on('send-message-to-server', (data) =>{
        io.sockets.emit('send-message-to-client', data);
    });
    
});

app.get('/', (req, res) =>{
    res.render('home');
})


server.listen(3000);


let checkUser = (user, listUser) =>{
    let key = true;
    listUser.forEach((item) =>{
        if(item === user){
            key = false;
        }
    });
    return key;
}