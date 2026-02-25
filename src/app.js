const express = require('express');
const app = express();
app.use(express.json());

const tasksRouter = require('./routes/tasks');

app.get('/', (req, res) => {
    // Correction de la virgule et de la parenthèse ici
    res.json({ message: "Task Manager API running (Lab2)" }); 
});

app.use('/tasks', tasksRouter);


if (require.main === module) {
    app.listen(3000, () => console.log("API running on port 3000"));
}

module.exports = app; 
