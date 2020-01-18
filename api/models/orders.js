const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId },
  quantity: { type: Number, required: true, default: 1 },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "product" }
});

module.exports = mongoose.model("order", orderSchema);
