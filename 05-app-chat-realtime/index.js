const express = require('express');
const app = express();
const server = require('http').createServer(app);
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');


app.get('/', (req, res) =>{
    res.render('home');
})


server.listen(8000);