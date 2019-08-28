const axios = require('axios');

const getData = (link) =>{
    return new Promise((resolve, reject) =>{
        axios.get(link)
        .then(res =>{
            resolve(res.data);
        })
        .catch(err =>{
            reject(err);
        });
    });
}
// goi dong thoi ==> neu 1 cai reject ==> se tra ve reject do luon
Promise.all([getData('https://jsonplaceholder.typicode.com/todos/1'),
             getData('https://jsonplaceholder.typicode.com/todos/3'),
             getData('https://jsonplaceholder.typicode.com/todos/2')
])
.then(res =>{
    console.log(res);
});

// race ==>> tra ve cai resolve dau tien
Promise.race([getData('https://jsonplaceholder.typicode.com/todos/1'),
             getData('https://jsonplaceholder.typicode.com/todos/3'),
             getData('https://jsonplaceholder.typicode.com/todos/2')
])
.then(res =>{
    console.log(res);
});