const mongoose = require("mongoose");

//const Product = mongoose.model('Product'); ele não consegue importar desse jeito
const Product = require('../models/Product');

module.exports = {
    async index(req, res) {
        const products = await Product.find();

        return res.json(products);
    }
};