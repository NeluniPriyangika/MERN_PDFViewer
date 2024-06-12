const PDF = require('../models/pdf.js');

exports.uploadPDF = async (req, res) => {
    const { title, description } = req.body;
    const file = req.file;
    if (!file) {
        return res.status(400).json({ msg: 'No file uploaded' });
    }
    try {
        const pdf = new PDF({
            title,
            description,
            filename: file.filename,
            uploader: req.user.id,
        });
        await pdf.save();
        res.json(pdf);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getPDFs = async (req, res) => {
    try {
        const pdfs = await PDF.find().populate('uploader', 'username email');
        res.json(pdfs);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
