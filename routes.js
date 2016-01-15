var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {    
    res.send('Birds are freee!!'); 
});

module.exports = router;