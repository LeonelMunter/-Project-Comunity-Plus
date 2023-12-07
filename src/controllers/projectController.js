const Project = require('../models/Project');

const getAllProject = async (req, res) => {
    try {
      const projects = await Project.find({});
      res.status(200).json(projects);
    } catch (error) {
      console.error('Error al obtener todos los proyectos:', error);
      res.status(500).json({ message: 'Error al obtener todos los proyectos' });
    }
  };
  
  // Obtener un usuario por ID
  const getProjectByID = async (req, res) => {
    const { id } = req.params;
    try {
      const project = await Project.findById(id);
      if (!project) {
        return res.status(404).json({ message: 'Proyecto no encontrado' });
      }
  
      res.status(200).json(project);
    } catch (error) {
      console.error('Error al obtener el proyecto por ID:', error);
      res.status(500).json({ message: 'Error al obtener el proyecto por ID' });
    }
  };
  
  // Crear un nuevo usuario
  const createProject = async (req, res) => {
    const { name, dificult, industryType, organizationType, pic, description, techRequeriments, projectTime, startDate, leaderName, email, disponibility, supervision, contractPosibility} = req.body;
  
    try {
      const newProject = new Project({ name, dificult, industryType, organizationType, pic, description, techRequeriments, projectTime, startDate, leaderName, email, disponibility, supervision, contractPosibility });
      await newProject.save();
      res.status(201).json({ message: 'Proyecto creado exitosamente', newUser });
    } catch (error) {
      console.error('Error al crear el proyecto:', error);
      res.status(500).json({ message: 'Error al crear el proyecto' });
    }
  };
  
  // Actualizar información de un usuario por ID
  const updateProject = async (req, res) => {
    const { id } = req.params;
    const newData = req.body;
  
    try {
      const updatedProject = await Project.findByIdAndUpdate(id, newData, { new: true });
      if (!updatedProject) {
        return res.status(404).json({ message: 'Proyecto no encontrado' });
      }
  
      res.status(200).json(updatedProject);
    } catch (error) {
      console.error('Error al actualizar el proyecto:', error);
      res.status(500).json({ message: 'Error al actualizar el proyecto' });
    }
  };
  
  // Eliminar un usuario por ID
  const deleteProject = async (req, res) => {
    const { id } = req.params;
    try {
      const deletedProject = await Project.findByIdAndDelete(id);
      if (!deletedProject) {
        return res.status(404).json({ message: 'Proyecto no encontrado' });
      }
  
      res.status(200).json({ message: 'Proyecto eliminado exitosamente' });
    } catch (error) {
      console.error('Error al eliminar el proyecto:', error);
      res.status(500).json({ message: 'Error al eliminar el proyecto' });
    }
  };
  
  module.exports = { getAllProject, getProjectByID, createProject, updateProject, deleteProject };