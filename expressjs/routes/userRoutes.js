const userRoute = require("express").Router();
const UserController = require("../controller/UserController");

userRoute.get("/", UserController.getUsers);

userRoute.get("/create", (req, res) => {
  res.send("ini create user");
});

module.exports = userRoute;
