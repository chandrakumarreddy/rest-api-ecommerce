const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (err) {
      console.log(err);
    } else console.log("connected to databse successfully");
  }
);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.use("/products", require("./api/routes/products"));
app.use("/orders", require("./api/routes/orders"));
app.use("/users", require("./api/routes/users"));

// serve static files
app.use("/uploads", express.static("./uploads"));

module.exports = app;
