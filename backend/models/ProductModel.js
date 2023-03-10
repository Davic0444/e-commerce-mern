const mongoose = require('mongoose')
const Review = require('./models/review')

const imageSchema = new mongoose.Schema({
    path: {type: String, required: true},
});

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        unique: true
    },
    count: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
    },
    reviewsNumber: {
        type: Number,
    },
    sales: {
        type: Number,
        dafault: 0
    },
    attribute: [
        {key: {type: String}, value: {type: String}}
    ],
    images: [imageSchema],
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: Review,
        }
    ]
},{
    timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

productSchema.index({name: 'text', description: 'text'}, {name: "TextIndex"});
productSchema.index({"attribute.key":1, "attribute.value":1});

module.exports = Product;