const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true }
});

module.exports = mongoose.model("product", productSchema);
