const express = require('express');
const router = express.Router();

// Données temporaires (en mémoire)
let tasks = [
  { id: 1, title: "Learn Git", completed: false },
  { id: 2, title: "Practice DevOps", completed: true }
];

// GET /tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// POST /tasks
router.post('/', (req, res) => {
  const { title, completed } = req.body;

  // Vérification simple
  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  const newTask = {
    id: tasks.length + 1,
    title: title,
    completed: completed || false
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

module.exports = router;