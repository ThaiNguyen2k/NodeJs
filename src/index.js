const express = require("express");
const app = express();
const port = 3000;
const bookRouter = require("./router/book");
const userRouter = require("./router/users");

app.use(express.json());
app.use;
express.urlencoded({ extended: true });
app.use("/v1", bookRouter);

app.use("/v1", userRouter);
app.listen(port);
