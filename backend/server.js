const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

//Connect to DB
const db = "mongodb://localhost:27017/ontsk";

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

//Creating DB
const todoSchema = new mongoose.Schema({
  title: String,
  complete: {
    type: Boolean,
    default: false
  }
});

const Todo = mongoose.model("todos", todoSchema);

//GET request
app.get("/todos", (req, res) => {
  Todo.find().then(todo => res.json(todo));
});

//POST request
app.post("/todos", (req, res) => {
  const newTodo = new Todo({
    title: req.body.title
  });
  newTodo.save().then(todo => res.json(todo));
});

//DELETE request
app.delete("/todos/:id", (req, res) => {
  Todo.findByIdAndDelete(req.params.id).then(() => res.json({ remove: true }));
});

app.listen(5000, () => {
  console.log("Server is running at port 5000");
});
