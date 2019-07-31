const http = require('http');

http.createServer((req, res) =>{
    res.writeHead(200, {'Content-type' : 'text/plain'});

    res.end('Konnichiwa');
}).listen(8000);

console.log('Start server at localhost:8000');