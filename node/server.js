const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const app = express();

mongoose.connect(
    "mongodb://localhost:27017/nodeapi", { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }
);

// require('./src/models/Product');
requireDir("./src/models");

const Product = mongoose.model('Product');

app.get("/", (req, res) => {
    Product.create({
        title: 'React Native',
        description: 'Build native app with',
        url: 'http://github.com/facebook/react-native'
    });

    res.send("Hello from darkness!!");
});

app.listen(3001);