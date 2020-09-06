const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const authConfig = require("../../config/auth");

async function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ error: "Token not informed" });

  const [, token] = authHeader.split(" ");

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Unauthorized" });
  }
}

module.exports = authMiddleware;
