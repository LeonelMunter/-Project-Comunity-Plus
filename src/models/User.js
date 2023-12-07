const mongoose = require('mongoose');

// Definir el esquema para el modelo de Usuario
const userSchema = new mongoose.Schema({
name:{
  type: String,
  required: true,
  minlength: 1,
  maxlength: 30,
},
surname:{
  type: String,
  required: true,
  minlength: 1,
  maxlength: 30,
},
age:{
  type: String,
  required: true,
},
nacionality: {
  type: String,
  required: true,
},
phone: {
  type: String,
  required: true,
},
province:{
  type: String,
  required: true,
},
city:{
  type: String,
  required: true,
},
privileges: {
  type: String,
  default: 'user', //user, empleado, gerente, admin, etc.
},
email: {
  type: String,
  required: true,
  unique: true,
  trim: true,
  lowercase: true,
  validate(value) {
    if (!validator.isEmail(value)) {
      throw new ClientError('Email no valido.', 400);
    }
  },
},
technologies:{
  type: Array,
  default: [],
},
username: { type: String, required: true, unique: true },
password: { type: String, required: true },
profilePic: {
  type: String,
  default: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
  validate(value) {
    if (!value.match(/^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/)) {
      throw new ClientError('La url es incorrecta.', 400);
    }
  },
}

});

// Crear y exportar el modelo de Usuario basado en el esquema
const User = mongoose.model('User', userSchema);

module.exports = User;
