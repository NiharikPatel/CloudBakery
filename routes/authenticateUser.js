const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY); 
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).send({ message: 'Invalid token' });
  }
  
};

module.exports = authenticateUser;
