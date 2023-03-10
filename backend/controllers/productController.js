const Product = require('../models/product');

const getProdcuts = (req, res) => {

    res.send("products");
}

module.exports = getProdcuts;