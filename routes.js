var express = require('express');
var router = express.Router();
var User = require('./models/user.js');
var logger = require('./utils/loggerUtil.js').logger;
var path = require('path');

router.get('/', function(req, res) {    
    res.send('Birds are freee!!'); 
});

router.post('/login', function(req, res) {
    User.find({$and: [{username: req.body.username}, {password: req.body.password}]}, function(err, result) {
       if(err) {
           logger.error("Error in logging in " + err);
           res.json({status: 500, message: "error in login"});
       } else if(!result) {
           logger.error("No result found");
           res.json({status: 404, message: "No user found"});
       } else {
           logger.info("User " + result[0].username + " logged in successfully");
           if(result[0].role === 'PMA' ) {
               res.send({statusL: 200, result: result});
           } else {
               res.send("Please check your authorization point on the application and contact the administrator");
           }
       }
    });
});

module.exports = router;