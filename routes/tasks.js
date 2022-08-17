const express = require("express");
const router = express.Router();

const {
    getAllTasks,
    createTask,
    getTask,
    removeTask,
    updatedTask,
} = require("../controllers/tasks");

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updatedTask).delete(removeTask);

module.exports = router;
