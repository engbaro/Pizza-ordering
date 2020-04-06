
module.exports = class price {
    price = function (numberOfToppings) {

        var priceInt = numberOfToppings * 1.79;
    
        return priceInt + (priceInt * 0.17);
    }  
};
