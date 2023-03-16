const fs = require("fs");

class TodoModel {
  constructor(id, task, status) {
    this.id = id;
    this.task = task;
    this.status = status;
  }

  static getTodos() {
    return new Promise((res, rej) => {
      fs.readFile("./todo.json", "utf-8", (err, data) => {
        if (err) {
          rej(err);
        } else {
          let todos = JSON.parse(data);
          todos = todos.map((todo) => {
            const { id, task, status } = todo;
            return new TodoModel(id, task, status);
          });
          res(todos);
        }
      });
    });
  }

  static create() {
    return new Promise((res, rej) => {});
  }
}

module.exports = TodoModel;
