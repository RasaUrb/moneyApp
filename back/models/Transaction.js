const mongoose = require('mongoose');

const Transaction = mongoose.model('Transaction', new mongoose.Schema({
    text:{
        type: String,
        trim: true.valueOf,
        required: [true, "Please enter text"]
    },
    amount:{
        type: Number,
        required: [true, " Please type the value"]
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createAt:{
        type: Date,
        default: Date.now
    }
}));

module.exports = Transaction;