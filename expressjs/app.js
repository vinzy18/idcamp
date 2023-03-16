const express = require("express");
const app = express();
const routes = require("./routes");
const port = 3000;

// Parsing req dari front end / postman
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
