const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});


const fileFilter = (req, file, cb) => {
    const filetypes = /pdf/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Only PDF files are allowed');
    }
};

const upload = multer({
    storage,
    limits: { fileSize: 20 * 1024 * 1024 },
    fileFilter
}).single('pdf');

module.exports = upload;
