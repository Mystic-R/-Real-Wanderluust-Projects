require("dotenv").config(); // Load environment variables

const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME, // Loaded from .env
  api_key: process.env.CLOUD_API_KEY, // Loaded from .env
  api_secret: process.env.CLOUD_API_SECRET, // Loaded from .env
});

// Setup Multer Storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "wanderluust_DEV",
    allowedFormats: ["png", "jpg", "jpeg"], // Ensure the spelling is correct
  },
});

// Export the configuration
module.exports = {
  cloudinary,
  storage,
};
