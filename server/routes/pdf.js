const express = require('express');
const { uploadPDF, getPDFs } = require('../controllers/pdfController.js');
const upload = require('../middlewares/uploadMiddleware.js');
const authMiddleware = require('../middlewares/authMiddleware.js');
const roleMiddleware = require('../middlewares/roleMiddleware.js');
const router = express.Router();

// Route for uploading PDFs, accessible by admin and uploader roles
router.post('/upload', authMiddleware, roleMiddleware(['admin', 'uploader']), upload, uploadPDF);

// Route for fetching PDFs, accessible by admin, user, and uploader roles
router.get('/', authMiddleware, roleMiddleware(['admin', 'user', 'uploader']), getPDFs);

module.exports = router;
