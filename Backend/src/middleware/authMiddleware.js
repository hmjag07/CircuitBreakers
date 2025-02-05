const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET; 

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ error: 'No token provided' });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }
    console.log('Decoded user:', decoded); 
    req.user = decoded;  // Attach the user information from the token to the request object
    next();
  });
};

module.exports = authMiddleware;
