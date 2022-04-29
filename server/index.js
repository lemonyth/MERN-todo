import express from "express";
import colors from "colors";
import router from "./routes/todoRoutes.js";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
mongoose.connect("mongodb://localhost/mern-todo", () => {
  console.log("connected to database successfully".green.bold);
});
app.use(express.json());
app.use(cors());
app.use("/api/todo", router);

//home
app.get("/", (req, res) => {
  res.send("welcome home");
});

app.listen(5000, () => {
  console.log("server running on port 5000".cyan.bold);
});
