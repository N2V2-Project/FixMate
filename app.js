// modules -- express, method-override, mongoose
const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const ejs = require("ejs");
const path = require("path");
const multer = require("multer");

const app = express();
const port = 3000;

const Issue = require("./models/issues.js");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError");
app.engine("ejs", require("ejs-mate"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// use ejs-mate for layouts

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // serve images

const { issueJoiSchema } = require("./Schema.js");
const { resourceLimits } = require("worker_threads");

const SchemaValidate = (req, res, next) => {
  let { error } = issueJoiSchema.validate(req.body);
  if (error) {
    throw new ExpressError(400, res.error);
  }
};

// MongoDB Connection
const MONGO_URL = "mongodb://127.0.0.1:27017/FixMate";
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.error("DB connection error:", err));

// Multer config
const { storage } = require("./cloudConfig");
const upload = multer({ storage });

// Routes
app.get('/', (req, res) => {
    res.render('apis/index.ejs');
});


app.get(
  "/issues",
  wrapAsync(async (req, res) => {
    const allIssues = await Issue.find({});
    res.render("apis/issues.ejs", { allIssues });
  })
);

app.get("/issues/new", (req, res) => {
  res.render("apis/issueForm.ejs");
});

app.post(
  "/issues",
  upload.single("photo"),
  wrapAsync(async (req, res) => {
    const issueData = req.body.issue;
    console.log(issueData);
    
    if (!issueData) {
      throw new ExpressError(400, "No form data received.");
    }

    // Ensure file uploaded
    if (!req.file || !req.file.path) {
      throw new ExpressError(400, "Image upload failed. Please check file type and Cloudinary config.");
    }

    issueData.photo = req.file.path;
    issueData.status = "Pending";

    const newIssue = new Issue(issueData);
    await newIssue.save();

    res.redirect("/issues");
  })
);


// app.post(
//   "/issues",
//   upload.single("photo"),
//   wrapAsync(async (req, res) => {
//     const issueData = req.body.issue;
//     if (!issueData) {
//       throw new ExpressError(400, "Valid data");
//     }
//     if (req.file) {
//       issueData.photo = req.file.path;
//     }
//     issueData.status = "Pending";
//     const newIssue = new Issue(issueData);
//     await newIssue.save();
//     res.redirect("/issues");
//   })
// );

app.get(
  "/issues/pending",
  wrapAsync(async (req, res) => {
    const pendingIssues = await Issue.find({ status: "Pending" });
    res.render("apis/pending.ejs", { allIssues: pendingIssues });
  })
);

app.get(
  "/issues/resolved",
  wrapAsync(async (req, res) => {
    const resolveIssues = await Issue.find({ status: "Resolved" });
    res.render("apis/resolve.ejs", { allIssues: resolveIssues });
  })
);

app.get(
  "/issues/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const issue = await Issue.findById(id);
    res.render("apis/show.ejs", { issue });
  })
);

// Global error handler
// app.all("*",(req,res,next)=>{
//   next(new ExpressError(404,"page not found"));
// })

app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong" } = err;
  res.render("apis/error.ejs", { message });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
