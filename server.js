let express = require('express');
let app = express();
let port = process.env.port || 3000;
require('./dbConnection');
let router = require('./routers/router');
let http = require('http').createServer(app);

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/swiss',router); //with api cat file i am using this router 


http.listen(port, ()=>{
    console.log('express server started');
});