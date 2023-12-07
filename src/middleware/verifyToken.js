const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key'; // Clave secreta para firmar/verificar tokens (deberías guardarla de manera segura)

const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Acceso denegado. Token no proporcionado.' });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token no válido' });
  }
};

module.exports = verifyToken;
