const express = require("express");

const User = require("../models/user");

const router = express.Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
});

module.exports = router;
