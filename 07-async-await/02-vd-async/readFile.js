const fs = require('fs');

// bat dong bo
fs.readFile('./list.txt', 'utf-8', (err, data) /*callback se dc goi sau khi doc file xong*/  =>{
    if(err) console.log('Loi: ' + err);
    else{
        console.log(data);
    }
});


console.log('Done!'); // ==> xuat hien truoc


// dong bo
const data = fs.readFileSync('./list.txt', 'utf-8'); // ==> ko co callback
console.log(data);