const Transaction = require('../models/Transaction');
const asyncHandler = require("express-async-handler");




const getTransactions = asyncHandler(async(req,res)=>{
    const transactions = await Transaction.find({});
    res.status(200).json(transactions);
});


module.exports = getTransactions

