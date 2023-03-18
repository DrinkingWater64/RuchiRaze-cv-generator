const { auth } = require("express-oauth2-jwt-bearer");

module.exports = auth({
  secret: process.env.AUTH0_SECRET,
  audience: "http://localhost:5000",
  issuerBaseURL: "https://guesswhatbbq.jp.auth0.com/",
  tokenSigningAlg: "HS256",
});
