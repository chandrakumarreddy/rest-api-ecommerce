const mongoose = require("mongoose");
const Product = require("../models/products");
const GET_PRODUCTS = async (req, res) => {
  const products = await Product.find().select("title price _id image");
  return res.json({
    products,
    request: { url: `http://localhost:3000/products`, method: "GET" },
    count: products.length
  });
};

const ADD_PRODUCT = async (req, res) => {
  const product = await Product.create({
    ...req.body,
    image: req.file.path,
    _id: new mongoose.Types.ObjectId()
  });
  return res.json({
    product: {
      title: product.title,
      price: product.price,
      image: product.image
    },
    request: { url: `http://localhost:3000/products`, method: "POST" }
  });
};

const UPDATE_PRODUCT = async (req, res) => {
  await Product.updateOne(
    { _id: req.params.id },
    { $set: req.body },
    { new: true }
  );
  return res.json({
    success: true,
    request: { url: `http://localhost:3000/products`, method: "PUT" }
  });
};

const DELETE_PRODUCT = async (req, res) => {
  await Product.remove({ _id: req.params.id });
  return res.json({
    success: true,
    request: { url: `http://localhost:3000/products`, method: "DELETE" }
  });
};

module.exports = {
  GET_PRODUCTS,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT
};
