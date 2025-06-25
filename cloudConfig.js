const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
require("dotenv").config(); 
// Replace with your own Cloudinary credentials
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Define storage engine
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "FixMate_Issues",
    allowed_formats: ["jpeg", "jpg", "png"],
  },
});

module.exports = {
  cloudinary,
  storage,
};