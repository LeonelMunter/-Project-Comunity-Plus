const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// Rutas para usuarios

// Obtener todos los usuarios
router.get('/', projectController.getAllProject);

// Obtener un usuario por su ID
router.get('/:id', projectController.getProjectByID);

// Crear un nuevo usuario
router.post('/', projectController.createProject);

// Actualizar información de un usuario por ID
router.put('/:id', projectController.updateProject);

// Eliminar un usuario por ID
router.delete('/:id', projectController.deleteProject);

module.exports = router;