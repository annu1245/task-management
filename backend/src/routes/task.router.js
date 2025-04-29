const express = require("express");
const taskRouter = express.Router();

const userAuth = require("../middleware/user.auth.js")

const Task = require("../model/task.model.js");
const {validateTask} = require("../utils/validate.js")

taskRouter.post("/create", userAuth, async(req, res) => {
  try {
    validateTask(req.body);
    const {title, description, status, dueDate, userId} = req.body;
    const task = await new Task({title, description, status, dueDate, userId});
    await task.save();
    res.send({message: "task created succesfully", data: task})
  } catch (error) {
    res.status(400).send(error.message);
  }
})

taskRouter.patch("/edit/:id", userAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    validateTask(req.body);
    const updatedTask = await Task.findByIdAndUpdate(id, updates, {
      new: true,            // return the updated document
    });

    if (!updatedTask) {
      return res.status(404).send("Task not found");
    }

    res.send({ message: "Task updated successfully", data: updatedTask });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

taskRouter.delete("/delete/:id", userAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).send("Task not found");
    }

    res.send({ message: "Task deleted successfully"});
  } catch (error) {
    res.status(400).send(error.message);
  }
});


//get all task of loggedin user
taskRouter.get("/", userAuth, async (req, res) => {
  try {
    const user = req.user;
    const tasks = await Task.find({userId: user._id})
    res.send({ message: "User tasks fetched", data: tasks });
  } catch (error) {
    res.status(400).send(error.message);
  }
})



module.exports = taskRouter;