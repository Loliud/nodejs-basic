


document.addEventListener('DOMContentLoaded', () => {
    const body = document.getElementById('body');
    const createUser = document.getElementById('create-user');
    const login = document.getElementById('login');
    const contentBox = document.getElementById('content');
    const username = document.getElementById('username');
    const boxChat = document.getElementById('form-chat');

    username.addEventListener('change', () =>{

    });

    login.addEventListener('click', () => {
        contentBox.setAttribute('style', 'display:flex');
        socket.emit('create-user', username.value);
        createUser.remove();

        


    });

    socket.on('create-user-fail', (data) =>{
        alert(data, 'Hay tao user khac');
        body.appendChild(createUser);
        contentBox.setAttribute('style', 'display:none');
    });

    socket.on('newUser-connected', (data) =>{
        let noti = document.createElement('div');
        noti.innerHTML = `${data} connected`;
        boxChat.appendChild(noti);
    })

});

