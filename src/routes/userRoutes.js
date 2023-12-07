const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const verifyToken = require('../middleware/verifyToken');

// Middleware para verificar el token en todas las rutas de usuario
router.use(verifyToken);

// Rutas para usuarios

// Obtener todos los usuarios
router.get('/', userController.getAllUsers);

// Obtener un usuario por su ID
router.get('/:id', userController.getUserByID);

// Crear un nuevo usuario
router.post('/', userController.createUser);

// Actualizar información de un usuario por ID
router.put('/:id', userController.updateUser);

// Eliminar un usuario por ID
router.delete('/:id', userController.deleteUser);

module.exports = router;
