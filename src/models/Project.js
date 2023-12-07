const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: 1,
        maxlength: 30,
      },
    dificult: {
        type: Array,
        default: [],
      },
    industryType:{
        type: String,
        required: true,
      },
    organizationType: {
        type: Array,
        default: [],
      },
    pic:{
        type: String,
        default: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
        validate(value) {
          if (!value.match(/^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/)) {
            throw new ClientError('La url es incorrecta.', 400);
          }
        },
      },
    description:{
        type: String,
        required: true,
      },
    techRequeriments:{
        type: Array,
        default: [],
      },
    projectTime: {
        type: String,
        required: true,
      },
    webPage: {
        type: String,
        //required: true,
      },
    startDate:{
        type: String,
        required: true,
      },
    leaderName:{
        type: String,
        required: true,
      },
    email:{
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
    disponibility: {
        type: String,
        required: true,
      },
    supervision:{
        type: String,
        required: true,
      },
    contractPosibility:{
        type: String,
        required: true,
      },
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;