const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, default: "default category description"},
    image: {type: String, default: "/images/tablets-category.png"},
    attribute: [{key: {type: String}, value: [{type: String}]}],
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;