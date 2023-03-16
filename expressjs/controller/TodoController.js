const { TodoModel } = require("../model");

class TodoController {
  static getTodos(req, res) {
    TodoModel.getTodos()
      .then((todos) => {
        res.send(todos);
      })
      .catch((err) => res.send(err));
  }

  static create(req, res) {
    TodoModel.create()
      .then((todos) => {})
      .catch((err) => res.send(err));
  }
  static delete(req, res) {
    TodoModel.delete()
      .then((todos) => {})
      .catch((err) => res.send(err));
  }
  static update(req, res) {
    TodoModel.update()
      .then((todos) => {})
      .catch((err) => res.send(err));
  }
}

module.exports = TodoController;
