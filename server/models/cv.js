const mongoose = require("mongoose");

const schema = mongoose.Schema({}, { timestamps: true, strict: false });

module.exports = mongoose.model("cvs", schema);
