const Task = require("../models/Task");

// Listar tareas ordenadas por fecha (más recientes primero)
exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 });
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: "Error al obtener tareas", details: err.message });
    }
};

// Crear tarea
exports.createTask = async (req, res) => {
    try {
        const task = new Task({ title: req.body.title });
        const savedTask = await task.save();
        res.json(savedTask);
    } catch (err) {
        res.status(500).json({ error: "Error al crear tarea", details: err.message });
    }
};

// Actualizar tarea
exports.updateTask = async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedTask);
    } catch (err) {
        res.status(500).json({ error: "Error al actualizar tarea", details: err.message });
    }
};

// Borrar tarea
exports.deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: "Tarea eliminada" });
    } catch (err) {
        res.status(500).json({ error: "Error al eliminar tarea", details: err.message });
    }
};
