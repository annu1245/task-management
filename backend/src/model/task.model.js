const mongoose = require("mongoose");
const {Schema} = mongoose;

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  status: {
    type: String,
    enum: ["To Do", "In Progress", "Done"],
    default: "To Do"
  },
  dueDate: {
    type: Date
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
}, {timestamps: true});

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;