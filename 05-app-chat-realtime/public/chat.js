document.addEventListener('DOMContentLoaded', () => {

    const createUser = document.getElementById('create-user');
    const login = document.getElementById('login');
    const contentBox = document.getElementById('content');
    const username = document.getElementById('username');

    username.addEventListener('change', () =>{

    });

    login.addEventListener('click', () => {
        contentBox.setAttribute('style', 'display:flex');
        createUser.remove();


    });
});

