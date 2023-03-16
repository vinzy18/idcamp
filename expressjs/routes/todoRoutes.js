const todoRoute = require("express").Router();
const TodoController = require("../controller/TodoController");

todoRoute.get("/", TodoController.getTodos);
todoRoute.post("/create", TodoController.create);
todoRoute.get("/delete", TodoController.delete);
todoRoute.post("/update", TodoController.update);

module.exports = todoRoute;
