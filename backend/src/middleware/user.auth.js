const jwt = require("jsonwebtoken");

function userAuth(req, res, next) {
  console.log(req.cookies.token)
  const token = req.cookies.token;
  if(!token) {
    console.log("if")
    return res.status(401).json({ error: 'No token provided. Access denied.' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    console.log(err)
    return res.status(403).json({ error: 'Invalid or expired token.' });
  }
}

module.exports = userAuth;