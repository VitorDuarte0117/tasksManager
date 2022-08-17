const Task = require("../models/tasks");

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});

        // res.status(200).json({ tasks, amount: tasks.length });
        res.status(200).json({
            status: "success",
            data: { tasks, nbHits: tasks.length },
        });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};
const getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOne({ _id: taskID });
        if (!task) {
            return res.status(404).json({ msg: `No task with id : ${taskID}` });
        }
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};
const removeTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const deleteTasks = await Task.findOneAndDelete({ _id: taskID });
        if (!deleteTasks) {
            return res
                .status(404)
                .json({ msg: `No task to delete with the ID : ${taskID}` });
        }
        res.status(200).json({ deleteTasks });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

const updatedTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const updateTask = await Task.findOneAndUpdate(
            { _id: taskID },
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );
        if (!updateTask) {
            return res
                .send(404)
                .json({ msg: `No task to update with the id ${taskID}` });
        }

        res.status(200).json({ updateTask });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
};

module.exports = { getAllTasks, createTask, getTask, updatedTask, removeTask };