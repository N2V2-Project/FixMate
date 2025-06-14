const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  branch: {
    type: String,
    required: true,
    trim: true,
  },
  section: {
    type: String,
    required: true,
    trim: true,
  },
  usn: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
    match: [
      /^U\d{2}[A-Z]{2}\d{2}[A-Z]{1}\d{6}$/,
      "Please enter a valid USN (e.g., U25UV22T043099)",
    ],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },

  issue: {
    type: String,
    required: true,
    trim: true,
  },

  photo: {
    type: String,
   
    default: "Default Link",
    set: (v) => (v === "" ? "default link" : v),
  },
  status: {
    type: String,
    enum: ["Pending", "In Progress", "Resolved"],
    default: "Pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Issue = mongoose.model("Issue", issueSchema);
module.exports = Issue;
