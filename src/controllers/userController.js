const User = require('../models/User');

// Obtener todos los usuarios
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    console.error('Error al obtener todos los usuarios:', error);
    res.status(500).json({ message: 'Error al obtener todos los usuarios' });
  }
};

// Obtener un usuario por ID
const getUserByID = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Error al obtener usuario por ID:', error);
    res.status(500).json({ message: 'Error al obtener usuario por ID' });
  }
};

// Crear un nuevo usuario
const createUser = async (req, res) => {
  const { name, surname, age, nacionality, phone, province, city, email, technologies, username, password } = req.body;

  try {
    const newUser = new User({  name, surname, age, nacionality, phone, province, city, email, technologies, username, password });
    await newUser.save();
    res.status(201).json({ message: 'Usuario creado exitosamente', newUser });
  } catch (error) {
    console.error('Error al crear usuario:', error);
    res.status(500).json({ message: 'Error al crear usuario' });
  }
};

// Actualizar información de un usuario por ID
const updateUser = async (req, res) => {
  const { id } = req.params;
  const newData = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(id, newData, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error('Error al actualizar usuario:', error);
    res.status(500).json({ message: 'Error al actualizar usuario' });
  }
};

// Eliminar un usuario por ID
const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json({ message: 'Usuario eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar usuario:', error);
    res.status(500).json({ message: 'Error al eliminar usuario' });
  }
};

module.exports = { getAllUsers, getUserByID, createUser, updateUser, deleteUser };
