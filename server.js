var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride =  require('method-override');   
var config = require('./config.js').config;
var logger = require('./utils/loggerUtil.js').logger;
var path = require('path');
//starting the web application server
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


mongoose.connect(config.mongoURL, function(err) {
   if(err) {
       logger.error("Unable to connecto mongoDB " +err);
   } else {
       logger.info("Connected to mongoDB");
   }
});

/* configurations */
//setting up socket.io for real time data
io.on('connection', function(err, socket) {
   if(err)  {    
       logger.error("Error in setting up socket.io connections");
   } else {       
       logger.info("Socket.io is live");
   }
});

//application configuration
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false})); 
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

//default route
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/login.html')); 
});


app.get('/dashboard', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/views/index.html')); 
});

app.use('/api', require('./routes.js'));

http.listen(config.port, function(err) {
   if(err) {       
       logger.error("Error in starting the port at " + config.port);
   } else {       
       logger.info("Server listening on port: " + config.port);
   } 
});

