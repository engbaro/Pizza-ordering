const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pizzaSchema = new Schema({
    name : String,
    phone : String,
    quantity : Number,
    address: String,
    status : String,
    crust: String,
    toppings: String,
    size: String,
    price: Number,
    createdOn : {type : Date, default : Date.now},
});

module.exports = mongoose.model('pizza', pizzaSchema);