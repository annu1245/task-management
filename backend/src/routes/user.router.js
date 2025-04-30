const express = require("express");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const User = require("../model/user.model.js");
const jwt = require("jsonwebtoken");
const userAuth = require("../middleware/user.auth.js");
const {validate} = require("../utils/validate.js");

// register route
userRouter.post("/register", async (req, res) => {
  try {
    validate(req.body)

    const {username, email, password} = req.body;
    const hashPassword = await bcrypt.hash(password, 10);

    const user = await new User({
      username,
      email,
      password: hashPassword
    })

    await user.save();
    res.send({message: "user created succesfully", data: user})
    
  } catch (error) {
    console.log(error.message)
    res.status(400).send(error.message);
  }
})

// login user
userRouter.post("/login", async(req, res) => {
  try {
    validate(req.body);
    const {email, password} = req.body;
    const user = await User.findOne({email});

    if(!user) {
      return res.status(400).send('Not an existing user');
    }

    const isPasswordMatch = bcrypt.compare(password, user.password);
    if(!isPasswordMatch) {
      return res.status(400).send('Invalid email or password');
    }

    const token = await jwt.sign({_id: user._id}, process.env.JWT_SECRET_KEY, {expiresIn: '1d'})
    res.cookie("token", token, {httpOnly: true, secure: false})

    return res.status(200).json({ message: 'Login successful', data: user});
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error.message);
  }
})

// logout user
userRouter.post("/logout", (req, res) => {
  res.clearCookie('token', {expires: new Date(Date.now())})
  return res.status(200).json({ message: 'Logged out successfully' });
})

// view user
userRouter.get("/profile/view", userAuth, async (req, res) =>{
  try {
    const user = req.user;
    if(!user) {
      throw new Error("unauthenticated user")
    }
    const data = await User.findOne({_id: user._id})
    return res.send(data);
  } catch (error) {
    res.status(400).send("authentication error " + error.message)
  }
})

module.exports = userRouter;