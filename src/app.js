const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/tasks');

const app = express();
app.use(express.json());

// 1. Connexion MongoDB (Isolée pour Jest)
if (process.env.NODE_ENV !== 'test') {
  const mongoURI = 'mongodb://db:27017/tasksdb';
  mongoose.connect(mongoURI)
    .then(() => console.log("✅ CONNECTÉ À MONGO !!!"))
    .catch(err => console.error("❌ ERREUR DE CONNEXION :", err));
}

app.get('/', (req, res) => {
  res.json({ message: "Task Manager API running" });
});

app.use('/tasks', taskRoutes);

// 2. Le Listener (Pour que le container reste ouvert)
if (process.env.NODE_ENV !== 'test') {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
  });
}

module.exports = app;