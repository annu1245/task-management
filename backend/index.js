const express = require("express");
require('dotenv').config();
const databseConnection = require("./src/databse.js")
const userRouter = require("./src/routes/user.router.js");
const taskRouter = require("./src/routes/task.router.js");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));

app.use(cookieParser());
app.use(express.json());

databseConnection()
  .then(() => {
    console.log("database is connected")
  })
  .then(() => {
    app.listen(port, function (err) {
      if (err) console.log(err)
      console.log("app is listning on port :", port)
    })
  })

app.use(userRouter);
app.use("/task", taskRouter);
