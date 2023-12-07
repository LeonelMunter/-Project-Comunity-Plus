const express = require('express');
const app = express();
const authRoutes = require('./src/routes/authRoutes');
const verifyToken = require('./src/middleware/verifyToken');
const userRoutes = require('./src/routes/userRoutes');
const projectRoutes = require('./src/routes/projectRoutes');

// Conexión a la base de datos al iniciar la aplicación
app.use(express.json());
app.use('/project', projectRoutes)
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
// Ruta protegida con JWT
app.get('/protected', verifyToken, (req, res) => {
  res.json({ message: 'Ruta protegida con JWT' });
});

module.exports = app;
