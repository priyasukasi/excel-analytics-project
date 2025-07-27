const express = require('express');
const router = express.Router();
const multer = require('multer');
const xlsx = require('xlsx');
const Excel = require('../models/Excel');

// Multer memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// ✅ 1. Upload Excel and return parsed data
router.post('/upload-excel', upload.single('file'), async (req, res) => {
  try {
    const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const jsonData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

    // Save data to MongoDB
    await Excel.insertMany(jsonData);

    // ✅ Send parsed data back to frontend
    res.json({ message: 'Upload successful!', data: jsonData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to process Excel file', error });
  }
});

// ✅ 2. Fetch all Excel data (for Dashboard refresh)
router.get('/excel-data', async (req, res) => {
  try {
    const data = await Excel.find({});
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data', error });
  }
});

module.exports = router;