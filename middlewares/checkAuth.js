const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.split("Bearer ")[1];
    try {
      jwt.verify(token, process.env.SECRET_KEY);
      return next();
    } catch (error) {
      return res.sendStatus(401);
    }
  }
  res.sendStatus(401);
};
