import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const TodoModel = mongoose.model("todoModel", todoSchema);

export default TodoModel;
