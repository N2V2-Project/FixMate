  // modules
  require("dotenv").config();
  const express = require("express");
  const methodOverride = require("method-override");
  const mongoose = require("mongoose");
  const ejsMate = require("ejs-mate");
  const path = require("path");
  const multer = require("multer");
  const flash = require("connect-flash");
  const session = require("express-session");
  const MongoStore=require("connect-mongo");
  const passport = require("passport");
  const LocalStrategy = require("passport-local");

  // models & utils
  const Issue = require("./models/issues.js");
  const User = require("./models/user.js");
  const wrapAsync = require("./utils/wrapAsync.js");
  const ExpressError = require("./utils/ExpressError.js");
  const { issueJoiSchema } = require("./Schema.js");

  // routes
  const authRoutes = require("./routes/auth.js");

  // app setup
  const app = express();
  const port = 3000;

  // DB connection
  //const MONGO_URL = "mongodb://127.0.0.1:27017/FixMate";
  const dbURL=process.env.ATLASDB_URL;
  mongoose.connect(dbURL)
    .then(() => console.log("✅ Connected to DB"))
    .catch((err) => console.error("❌ DB connection error:", err));

  // view engine
  app.engine("ejs", ejsMate);
  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "views"));

  // middleware
  app.use(express.urlencoded({ extended: true }));
  app.use(methodOverride("_method"));
  app.use(express.static(path.join(__dirname, "public")));
  app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use('/virtualtour', express.static(path.join(__dirname, 'public/virtualtour')));

  const store=  MongoStore.create({
    mongoUrl: dbURL,
    crypto:{
        secret: process.env.SECRET,
    },
    touchAfter:24*3600,
  });

  store.on("error",()=>{
    console.log("Error in session store");
  })

  // session & flash setup
  const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      expires:Date.now()+7*24*60*60*1000,
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24*7,
    },
  };


  app.use(session(sessionOptions));
  app.use(flash());

  // Passport setup
  app.use(passport.initialize());
  app.use(passport.session());
  passport.use(new LocalStrategy(User.authenticate()));
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());

  // Save flash messages and user in locals
  app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currentUser = req.user;
    next();
  });

  // Optional: Save returnTo URL
  app.use((req, res, next) => {
    if (!req.user && req.method === "GET" && req.path !== "/login") {
      req.session.returnTo = req.originalUrl;
    }
    next();
  });

  // Multer config
  const { storage } = require("./cloudConfig");
  const upload = multer({ storage });

  // Joi validation middleware
  const SchemaValidate = (req, res, next) => {
    const { error } = issueJoiSchema.validate(req.body);
    if (error) {
      throw new ExpressError(400, error.message);
    }
    next();
  };

  // ✅ isLoggedIn middleware
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
     req.session.returnTo = req.originalUrl;
    req.flash("error", "You must be logged in first!");
    res.redirect("/login");
  }

  // Routes
  app.use("/", authRoutes);

  // Home
  app.get("/", (req, res) => {
  
    res.render("apis/index.ejs");
  });

  // 🔐 View all issues
  app.get("/issues", isLoggedIn, wrapAsync(async (req, res) => {
    const allIssues = await Issue.find({});
    res.render("apis/issues.ejs", { allIssues });
  }));

  // 🔐 New issue form
  app.get("/issues/new", isLoggedIn, (req, res) => {
    res.render("apis/issueForm.ejs");
  });

  // 🔐 Create issue
  app.post("/issues", isLoggedIn, upload.single("photo"), wrapAsync(async (req, res) => {
    const issueData = req.body.issue;

    if (!issueData) throw new ExpressError(400, "No form data received.");
    if (!req.file || !req.file.path) throw new ExpressError(400, "Image upload failed.");

    issueData.photo = req.file.path;
    issueData.status = "Pending";

    const newIssue = new Issue(issueData);
    await newIssue.save();
    req.flash("success", "Issue submitted successfully!");
    res.redirect("/issues");
  }));

  // 🔐 Pending issues
  app.get("/issues/pending", isLoggedIn, wrapAsync(async (req, res) => {
    const pendingIssues = await Issue.find({ status: "Pending" });
    res.render("apis/pending.ejs", { allIssues: pendingIssues });
  }));

  // 🔐 Resolved issues
  app.get("/issues/resolved", isLoggedIn, wrapAsync(async (req, res) => {
    const resolvedIssues = await Issue.find({ status: "Resolved" });
    res.render("apis/resolve.ejs", { allIssues: resolvedIssues });
  }));

  // 🔐 View specific issue
  app.get("/issues/:id", isLoggedIn, wrapAsync(async (req, res) => {
    const { id } = req.params;
    const issue = await Issue.findById(id);
    if (!issue) throw new ExpressError(404, "Issue not found");
    res.render("apis/show.ejs", { issue });
  }));

  // Global error handler
  app.use((err, req, res, next) => {
    const { statusCode = 500, message = "Something went wrong" } = err;
    res.status(statusCode).render("apis/error.ejs", { message });
  });

  // Start server
  app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
  });
