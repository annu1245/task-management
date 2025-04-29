const express = require("express");
const databseConnection = require("./src/databse.js")
const app = express();
const port = 3000;
const cors = require("cors");

require('dotenv').config();
const cookieParser = require("cookie-parser");

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(cookieParser());
app.use(express.json());

databseConnection()
.then(() => {
  console.log("database is connected")
})
.then(() => {
  app.listen(port, function(err){
    if(err) console.log(err)
    console.log("app is listning on port :", port)
  })
})

const userRouter = require("./src/routes/user.router.js");
const taskRouter = require("./src/routes/task.router.js");

app.use(userRouter);
app.use("/task", taskRouter);