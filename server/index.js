const express = require("express");
require("dotenv").config();
const { connection } = require("./config/database");

const userRouter = require("./routes/user");
const cvRouter = require("./routes/cv");
const authRouter = require("./routes/authentication");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static("dist"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/cv", cvRouter);

connection
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.error(error));
