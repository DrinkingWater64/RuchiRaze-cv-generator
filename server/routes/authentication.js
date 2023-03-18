const express = require("express");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.create({ email, password });
    const accessToken = jwt.sign({ email }, process.env.JWT_TOKEN, {
      expiresIn: "5d",
    });
    res.json({ message: "ok", accessToken });
  } catch (error) {
    res.json(error);
    console.error(error);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    const accessToken = jwt.sign(user, process.env.JWT_TOKEN, {
      expiresIn: "5d",
    });
    res.json({ message: "ok", accessToken });
  } catch (error) {
    res.json(error);
    console.error(error);
  }
});

module.exports = router;
