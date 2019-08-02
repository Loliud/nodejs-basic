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
            socket.broadcast.emit('newUser-connected', data);
        }
    });
});

app.get('/', (req, res) =>{
    res.render('home');
})


server.listen(8000);


let checkUser = (user, listUser) =>{
    let key = true;
    listUser.forEach((item) =>{
        if(item === user){
            key = false;
        }
    });
    return key;
}