const multer = require('multer');
const path = require('path');

// Storage engine configurationc
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads'); // Folder where files will be saved (must exist)
  },
  filename: function (req, file, cb) {
    // Save file with timestamp + original extension
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// Upload instance
const upload = multer({ storage: storage });

module.exports = upload;