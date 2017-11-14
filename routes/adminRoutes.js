const express = require("express");
const passport = require("passport");
const Strategy = require("passport-local");
const Admin = require("../models/admin");
const jwt = require("jsonwebtoken");
let settings = require("../settings.js");

const adminRouter = express.Router();

passport.use(new Strategy((usernameAttempt, passwordAttempt, done)=>{
  Admin.findOne({username: usernameAttempt}, (err, currentUser)=>{
    if (err){
      done(err, false);
    } else if (currentUser === null) {
      done(null, false);
    } else {
      currentUser.auth(passwordAttempt, (isCorrect)=>{
        done(null, isCorrect);
      })
    }
  })
}));

adminRouter.use(passport.initialize());

adminRouter.post("/login", passport.authenticate("local", {session: false}), (req, res) => {  
  Admin.findOne({username: req.body.username}, (err, user)=>{
    if (err) {
      res.status(500).send({
        success: false,
        err
      })
    } else if (user === null){
      res.status(404).send({
        success: false,
        err: "That user does not exist!"
      })
    } else {
      res.status(201).send({
        success: true,
        user: user.withoutPassword(),
        token: jwt.sign(user.withoutPassword(), settings.secret, {
          expiresIn: 24 * 60 * 30
        })
      })
    }
  })
});

adminRouter.post("/signup", (req, res)=>{
  Admin.findOne({username: req.body.username}, (err, existingUser)=>{
    if(err){
      res.status(500).send({
        success: false,
        err
      });
    } else if(existingUser !== null) {
      res.status(400).send({
        success: false,
        err: "That user already exists"
      });
    } else {
      let newAdmin = new Admin(req.body);
      newAdmin.save((err, savedUser)=>{
        if(err){
          res.status(500).send({
            success: false,
            err
          })
        } else {
          res.status(201).send({
            success: true,
            savedUser
          })
        }
      })
    }
  })
})

module.exports = adminRouter;