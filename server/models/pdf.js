const mongoose = require('mongoose');

const pdfSchema = new mongoose.Schema(
    {
        title: { 
            type: String, 
            required: true 
        },
        description: { 
            type: String 
        },
        filename: { 
            type: String, 
            required: true 
        },
        uploader: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User' 
        },
    }, 
    { timestamps: true }
);

const PDF = mongoose.model('PDF', pdfSchema);
module.exports = PDF;
