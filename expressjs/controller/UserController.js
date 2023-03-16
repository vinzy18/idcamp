const { UserModel } = require("../model");

class UserController {
  static getUsers(req, res) {
    UserModel.getUsers()
      .then((users) => {
        res.send(users);
      })
      .catch((err) => res.send(err));
  }
}

module.exports = UserController;
