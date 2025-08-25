import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        status: { type: String, enum: ["Pendiente", "En curso", "Completada"], default: "Pendiente" },
        dueDate: { type: Date } // fecha y hora previstas
    },
    { timestamps: true }
);

export default mongoose.model("Task", taskSchema);
