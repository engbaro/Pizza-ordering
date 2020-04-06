var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {

 res.render('login');
});


router.post('/login', function(req, res, next) {
    var name = req.body.name;
    var password = req.body.password;
    res.render('order');
   });
   

router.get('/register', function(req, res, next) {

    res.render('register');
   });
module.exports = router;
