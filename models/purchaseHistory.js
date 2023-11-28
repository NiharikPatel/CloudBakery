const mongoose = require('mongoose');

const purchaseHistorySchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  orderitems:[{
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
   required: true,
 },
  amount: {
    type: Number,
    required: true,
  }}],
  date: {
    type: Date,
    default: Date.now,
  },
});
const PurchaseHistory = mongoose.model('PurchaseHistory', purchaseHistorySchema);
module.exports = PurchaseHistory;