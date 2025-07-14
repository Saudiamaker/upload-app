const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// File storage config
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage });

app.use(express.static('public'));

// File upload endpoint
app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded successfully');
});

// Serve HTML
app.get('/', (req, res) => {
  app.use(express.static('public'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
