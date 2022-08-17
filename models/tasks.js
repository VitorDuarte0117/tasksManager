const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "must provide a name"],
        trim: true,
        maxLength: [20, "name cannot be more than 20 characters"],
    },
    completed: {
        type: Boolean,
        default: false,
    },
});
// ta enviando para "Task" que vai se transformar em "tasks" no MONGODB usando o taskSchema de estrutura, se colocar coisas alem do que esta predeterminado no Schema não vai mostrar
module.exports = mongoose.model("Task", TaskSchema);
