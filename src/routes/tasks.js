const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// On définit le Schéma et le Modèle directement ici
const Task = mongoose.model('Task', new mongoose.Schema({
  title: String,
  completed: Boolean
}));

// GET /tasks
router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// POST /tasks
router.post('/', async (req, res) => {
  try {
    const newTask = new Task(req.body);
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (err) {
    res.status(400).json({ error: "Erreur enregistrement" });
  }
});

module.exports = router;