const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

// ✅ Use dynamic port for Render
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

// File upload setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// Upload route
app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully');
});

// ✅ Correct dynamic port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
