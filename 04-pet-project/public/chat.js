const body = document.getElementById('body');
const form = document.getElementById('form');
const input = document.getElementById('input');

input.addEventListener('change', (event) =>{
   
});

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    socket.emit('chat-message', input.value);

    
}); 

socket.on('server-send-message', (data) =>{
    let viewMessage = document.createElement('div');
    viewMessage.innerHTML = data;
    body.appendChild(viewMessage);
});
