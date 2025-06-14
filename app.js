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
        console.log(allIssues);
       res.render("apis/issues.ejs", { allIssues });  // Make sure main.ejs exists
    } catch (err) {
        console.log("Error fetching issues:", err);
        res.status(500).send("Internal Server Error");
    }
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