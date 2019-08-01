let buffer =  Buffer.from('Hello world', 'utf-8');

console.log(buffer);


console.log(buffer.toString());
let data = buffer.toJSON();

let newBuffer = Buffer.from(data);
console.log(newBuffer);
console.log(newBuffer.toString());