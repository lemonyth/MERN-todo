import TodoModel from "../model/todoModel.js";

//get all todos
export const getTodos = async (req, res) => {
  try {
    const todos = await TodoModel.find({});
    res.json(todos);
    console.log(todos);
  } catch (error) {
    res.send(error);
  }
};

//get one todo

//create a todo
export const createTodo = async (req, res) => {
  try {
    const task = req.body;
    const response = await TodoModel.create(task);
    console.log(response);
    res.send(task);
  } catch (error) {
    res.send(error);
  }
};

//update a todo

export const updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const updatedTodo = await TodoModel.findOneAndUpdate({ _id: id }, body);
    res.send(updatedTodo);
  } catch (error) {
    res.send(error);
  }
};

// delete todo

export const deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await TodoModel.findOneAndDelete({ _id: id });
    res.send(todo);
  } catch (error) {
    res.send(error);
  }
};
