


document.addEventListener('DOMContentLoaded', () => {
    const body = document.getElementById('body');
    const createUser = document.getElementById('create-user');
    const login = document.getElementById('login');
    const contentBox = document.getElementById('content');
    const username = document.getElementById('username');
    const boxChat = document.getElementById('form-chat');
    const userOnlines = document.getElementById('user-online');
    const sendButton = document.getElementById('send');
    const inputMessage = document.getElementById('message');


    username.addEventListener('change', () => {

    });
    inputMessage.addEventListener('change', () =>{
        
    });

    login.addEventListener('click', () => {
        contentBox.setAttribute('style', 'display:flex');
        socket.emit('create-user', username.value);
        createUser.remove();

    });

    sendButton.addEventListener('click', () =>{
        socket.emit('send-message-to-server', inputMessage.value);
        inputMessage.value = '';
    });

    socket.on('create-user-fail', (data) => {
        alert(data, 'Hay tao user khac');
        body.appendChild(createUser);
        contentBox.setAttribute('style', 'display:none');
    });

    socket.on('newUser-connected', (data) => {
        let noti = document.createElement('div');
        noti.innerHTML = `${data} connected`;
        boxChat.appendChild(noti);
    });

    socket.on('user-online', (data) => {
        let showUser = '<h1>User Online</h1>';
        data.forEach((user) => {
            showUser = showUser + '<div>' + user + '<div/>';
        });
        userOnlines.innerHTML = showUser;

    });

    socket.on('send-message-to-client', (data) =>{
        let newMessage = document.createElement('div');
        newMessage.innerHTML = data;
        boxChat.appendChild(newMessage);

    });

});

