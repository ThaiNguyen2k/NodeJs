const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.use;
express.urlencoded({ extended: true });

app.listen(port);

function validate(req, res, next) {
  const { username } = req.body;
  if (username === undefined) {
    next("Username is require");
  }
  next();
}