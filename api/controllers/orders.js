const mongoose = require("mongoose");
const Order = require("../models/orders");

const GET_ORDERS = async (req, res) => {
  const orders = await Order.find()
    .populate("product", { title: 1, price: 1 })
    .select("-_id -__v");
  return res.json({
    orders,
    request: { url: `http://localhost:3000/orders`, method: "GET" },
    count: orders.length
  });
};

const ADD_ORDER = async (req, res) => {
  const order = await Order.create({
    ...req.body,
    _id: new mongoose.Types.ObjectId()
  });
  return res.json({
    order: { _id: order._id },
    request: { url: `http://localhost:3000/orders`, method: "POST" }
  });
};

const UPDATE_ORDER = async (req, res) => {
  await Order.updateOne(
    { _id: req.params.id },
    { $set: req.body },
    { new: true }
  );
  return res.json({
    success: true,
    request: {
      url: `http://localhost:3000/orders/${req.params.id}`,
      method: "PUT"
    }
  });
};

const DELETE_ORDER = async (req, res) => {
  await Order.remove({ _id: req.params.id });
  return res.json({
    success: true,
    request: {
      url: `http://localhost:3000/orders/${req.params.id}`,
      method: "DELETE"
    }
  });
};

module.exports = {
  GET_ORDERS,
  ADD_ORDER,
  UPDATE_ORDER,
  DELETE_ORDER
};
