const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, trim: true },
        completed: { type: Boolean, default: false }
    },
    { timestamps: true } // createdAt y updatedAt
);

module.exports = mongoose.model("Task", taskSchema);
