import Task from "../models/Task.js";

// Listar todas las tareas
export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find(); // 🔹 Aquí usa Task.find()
        res.json(tasks);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error al obtener tareas", details: err.message });
    }
};

// Crear tarea
export const createTask = async (req, res) => {
    try {
        const { title } = req.body;
        if (!title) return res.status(400).json({ msg: "El título es obligatorio" });

        const newTask = new Task({ title });
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error al crear tarea", details: err.message });
    }
};

// Actualizar tarea
export const updateTask = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const task = await Task.findByIdAndUpdate(id, updates, { new: true });
        if (!task) return res.status(404).json({ error: "Tarea no encontrada" });
        res.json(task);
    } catch (err) {
        console.error("Error al actualizar tarea:", err);
        res.status(500).json({ error: "Error al actualizar tarea", details: err.message });
    }
};

// Eliminar tarea
export const deleteTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ msg: "Tarea no encontrada" });

        await task.deleteOne();
        res.json({ msg: "Tarea eliminada" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error al eliminar tarea", details: err.message });
    }
};
