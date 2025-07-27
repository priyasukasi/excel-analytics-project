const mongoose = require('mongoose');

// Forcefully define collection name: 'excels'
const ExcelSchema = new mongoose.Schema({}, { strict: false });

module.exports = mongoose.model('Excel', ExcelSchema, 'excels');