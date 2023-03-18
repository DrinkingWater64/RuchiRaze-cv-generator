const mongoose = require("mongoose");

const mongooseURI = process.env.MONGOOSE_URI;

mongoose.set("strictQuery", false);

const connection = mongoose.connect(mongooseURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = {
  connection,
};
