const express = require("express");
const passport = require("passport");
const User = require("../models/user");

const router = express.Router();

// Signup Form Page
router.get("/signup", (req, res) => {
  res.render("apis/signup");
});

// Signup Logic
router.post("/signup", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username });
    const registeredUser = await User.register(user, password);
    req.login(registeredUser, err => {
      if (err) return next(err);
      req.flash("success", "Welcome to FixMate!");
      res.redirect("/issues");
    });
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/signup");
  }
});

// ✅ Login Form Page
// Show login form
router.get("/login", (req, res) => {
  res.render("apis/login");
});

// Handle login
router.post("/login", passport.authenticate("local", {
  failureRedirect: "/login",
  failureFlash: true
}), (req, res) => {
  req.flash("success", "Welcome back!");
  res.redirect("/issues");
});

//logout
router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    req.flash("success", "Logged out successfully!");
    res.redirect("/");
  });
});

module.exports = router;
