const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const winston = require('./config/winston.js');
const authRoutes = require('./routes/auth.js');
const pdfRoutes = require('./routes/pdf.js');
const authMiddleware = require('./middlewares/authMiddleware.js');
const path = require('path');

//console.log ("hi neluni")

dotenv.config();
const app = express();

// Middleware
app.use(cors({
    origin: 'http://localhost:3000', // Adjust this according to your frontend's URL
    methods: 'GET,POST,PUT,DELETE',
    credentials: true
}));
app.use(express.json());
app.use(morgan('combined', { stream: winston.stream }));


// Database Connection
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/pdf', authMiddleware, pdfRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
