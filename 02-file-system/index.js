const fs = require('fs');

// chay dong bo
// let data = fs.readFileSync('text.txt');
// console.log(data.toString());
// console.log('end');

// chay bat dong bo:
fs.readFile('text.txt', (req, data) =>{
    if(err) throw err;
    console.log(data.toString());
});

console.log('end');