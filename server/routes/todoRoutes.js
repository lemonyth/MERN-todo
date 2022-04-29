import express from "express";
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todoController.js";

const router = express.Router();

// get all todos
router.get("/", getTodos);

// create a todo
router.post("/", createTodo);

//update a todo
router.put("/:id", updateTodo);

//delete a todo
router.delete("/:id", deleteTodo);

export default router;
