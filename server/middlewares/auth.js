const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const token = req.headers["Authorization"];
  if (token) {
    try {
      const data = jwt.verify(token, process.env.JWT_TOKEN);
      req.user = data;
      next();
    } catch (error) {
      console.error(error);
      res.json(error);
    }
  }
};

module.exports = {
  auth,
};
