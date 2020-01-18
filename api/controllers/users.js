const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/users");
const jwt = require("jsonwebtoken");

const SIGNUP = (req, res) => {
  console.log(req.body);
  try {
    bcrypt.genSalt(10, function(err, salt) {
      if (err) return res.status(400).json({ message: "salt" });
      bcrypt.hash(req.body.password, salt, async function(err, hash) {
        if (err) return res.status(400).json({ message: "hash" });
        const user = await User.create({
          email: req.body.email,
          password: hash,
          _id: new mongoose.Types.ObjectId()
        });
        res.json({
          success: true,
          token: jwt.sign({ _id: user._id }, process.env.SECRET_KEY, {
            expiresIn: 60 * 60
          })
        });
      });
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = { SIGNUP };
