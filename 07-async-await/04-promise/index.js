const request = require('request');

// request('https://jsonplaceholder.typicode.com/todos/1', (err, res, body) =>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(body);
//     }
// });

// su dung promise 

const load = (link) =>{
    return new Promise((resolve, reject) =>{
        request(link, (err, res, body) =>{
            if(err){
                reject(err);
            }else{
                resolve(body);
            }
        });
    });
   
}

console.log('Start fetching ....');
load('https://jsonplaceholder.typicode.com/todos/1')
.then(res =>{
    console.log('done: ' +res);
})
.catch(err =>{
    console.log(err);
});
console.log('nothing');