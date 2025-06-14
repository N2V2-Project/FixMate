//modules -- express,method-override,mongoose
const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const ejs = require("ejs");
const app = express();
const path = require("path");

app.set("view engine", "ejs"); // sets ejs as template engine
app.set("views", path.join(__dirname, "views")); // ensures views/ is the base directory
app.use(express.urlencoded({ extended: true }));
const ejsMate = require("ejs-mate");
app.engine("ejs", ejsMate);
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
const port=3000;

const Issue=require('./models/issues.js');
const { isMarkedAsUntransferable } = require("worker_threads");
const multer = require("multer");
app.use("/uploads", express.static("uploads"));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));





const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // save to uploads/ folder
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: function (req, file, cb) {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const isValidExt = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const isValidMime = allowedTypes.test(file.mimetype);
    if (isValidExt && isValidMime) {
      cb(null, true);
    } else {
      cb(new Error("Only images (jpeg, jpg, png, gif) are allowed"));
    }
  }
});








const MONGO_URL='mongodb://127.0.0.1:27017/FixMate';


main().then(()=>{
    console.log("Connect to dB");
}).catch(err=>{
    throw new err;
})
async function main(){
    await mongoose.connect(MONGO_URL);
}


app.get("/issues",async (req,res)=>{
    try {
        const allIssues = await Issue.find({});
       // console.log(allIssues);
       res.render("apis/issues.ejs", { allIssues });  // Make sure main.ejs exists
    } catch (err) {
        console.log("Error fetching issues:", err);
        res.status(500).send("Internal Server Error");
    }
});

app.get("/issues/new",(req,res)=>{
    res.render("apis/issueForm.ejs");
})


app.post('/issues', upload.single('photo'), async (req, res) => {
  try {
    const issueData = req.body.issue;

    // If photo was uploaded, store its path
    if (req.file) {
      issueData.photo = `/uploads/${req.file.filename}`;
    }

     issueData.status = "Pending"; 
    const newIssue = new Issue(issueData);
   
    await newIssue.save();
    res.redirect('/issues');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving issue');
  }
});

app.get("/issues/pending", async (req, res) => {
  const pendingIssues = await Issue.find({ status: "Pending" }); // Capital P
 // console.log(pendingIssues);
  res.render("apis/pending.ejs", { allIssues: pendingIssues });
});
app.get("/issues/resolved", async (req, res) => {
  const resolveIssues = await Issue.find({ status: "Resolved" }); // Capital P
 // console.log(pendingIssues);
  res.render("apis/resolve.ejs", { allIssues: resolveIssues });
});


app.get("/issues/:id",async(req,res)=>{
    let {id}=req.params;
    try{
        const issue=await Issue.findById(id);
        res.render("apis/show.ejs",{issue});
    }
    catch (err) {
        console.log("Error fetching issues:", err);
        res.status(500).send("Internal Server Error");
    }
});



app.listen(port, () => {
  console.log(`Server is Running in ${port}`);
});