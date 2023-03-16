const route = require("express").Router();
const todoRoutes = require("./todoRoutes");
const userRoutes = require("./userRoutes");

route.get("/", (req, res) => {
  res.send("Hello World!");
});
route.use("/todos", todoRoutes);
route.use("/users", userRoutes);

module.exports = route;
