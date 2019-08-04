document.addEventListener('DOMContentLoaded', () => {
    const login = document.getElementById('login');
    const contentBox = document.getElementById('content');

    login.addEventListener('click', () => {

        console.log('hello');
        contentBox.setAttribute('style', 'display:flex');

    });
});

