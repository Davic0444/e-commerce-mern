const mongoose = require('mongoose');
const User = require('./UserModel');

const orderScema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    orderTotal: {
        itemCount: {
            type: Number,
            required: true,
        },
        cartSubtotal: {
            type: Number,
            required: true,
        }
    },
    cartItems: [{
        name: {type: String, required: true,},
        price: {type: Number, required: true,},
        image: {path: {type: String, required: true},},
        quantity: {type: Number, required: true},
        count: {type: Number, required: true},
    }],
    transaction: {
        status: {type: String},
        createdAt: {type: String},
        amount: {type:Number}
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false,
    },
    paidAt: {
        type: Date,
    },
    isDelivered: {
        type: Boolean,
        required: true,
        default: false,
    },
    deliveredAt: {
        type: Date,
    }
}, {
    timestamps: true,
})

const Order = mongoose.model('Order', orderScema);

module.exports = Order;