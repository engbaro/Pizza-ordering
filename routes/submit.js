var express = require('express');
var router = express.Router();
const validate = require('validator');
var price = require('../price');
const Pizza = require('../models/pizza');
var priceobj = new price();


/* GET users listing. */
router.post('/', function(req, res, next) {

  Pizza.findByIdAndUpdate(req.body.id, {status : 'submited'}, {upsert: true, useFindAndModify: false}, function(err, doc) {
    if (err) return res.send(500, {error: err});
    return res.render('final');

});
  
});
module.exports = router;
