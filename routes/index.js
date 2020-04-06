var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {

  let data = fs.readFileSync('order.json');
  let order = JSON.parse(data);
  obj = {
      sizes : order['Sizes'],
      topings : order['Topings'],
      crust : order['Crust']
  }
 res.render('order', obj);
});

module.exports = router;
