var express = require('express');
var router = express.Router();
const validate = require('validator');
var price = require('../price');
const Pizza = require('../models/pizza');
var priceobj = new price();
/* GET users listing. */
router.get('/', function(req, res, next) {

  var id = req.query.id;

  Pizza.findById(id, (err, doc) => {
    if (err) {
      console.log('error retriving data');  
    }
    response = {id: doc.id, crust: doc.crust, size: doc.size, topping: doc.toppings, phone:doc.phone, name:doc.name, price:doc.price, quantity: doc.quantity}
    res.render('confirmation', response);
  })
});


/* GET users listing. */
router.post('/', function(req, res, next) {

  let topping = req.body.topping;

  if (!validate.isMobilePhone(req.body.phone)) {
    return res.status(400).json({ status: 'Phone number is not valid' });
  } 
  if (!req.body.name) {
    return res.status(400).json({ status: 'Name is not valid' });
  }
  if (!validate.isInt(req.body.quantity)) {
    return res.status(400).json({ status: 'Quantity should be a number' });
  }
  if (!req.body.size) {
    return res.status(400).json({ status: 'Choose a value for the size' });
  }
  if (!topping) {
    return res.status(400).json({ status: 'choose toppings' });
  }

  if (!req.body.crust) {
    return res.status(400).json({ status: 'choose a crust' });
  }
  if (validate.isMobilePhone(req.body.phone) && req.body.name && validate.isInt(req.body.quantity) && req.body.size &&
  req.body.crust && topping
  )  {
      let obj = {
          crust : req.body.crust,
          size : req.body.size,
          toppings : topping,
          name : req.body.name,
          phone : req.body.phone,
          quantity: req.body.quantity,
          price: priceobj.price(req.body.number_topping),
          status: 'created'
  
      }
      let pizza = new Pizza(obj);
      pizza.save((err) => {
        if (err) {
          console.log('Failed to save the course in Mongodb', err);
          res.status(500).json({ status: 'Failed to save the course' });
          return;
        }
       // res.redirect(200,  '/pizza?id=' +pizza.id);
       res.json({ id : pizza.id, status: 'Successfully added the pizza' });
      });
  
  } else 
  {
    return res.status(400).json({ status: 'Error validating the order' });
  }
});
module.exports = router;
