const fs = require("fs");

class UserModel {
  constructor(id, username, email, password, city) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.city = city;
  }

  static getUsers() {
    return new Promise((res, rej) => {
      fs.readFile("./user.json", "utf-8", (err, data) => {
        if (err) {
          rej(err);
        } else {
          let users = JSON.parse(data);
          users = users.map((user) => {
            const { id, username, email, password, city } = user;
            return new UserModel(id, username, email, password, city);
          });
          res(users);
        }
      });
    });
  }
}

module.exports = UserModel;
