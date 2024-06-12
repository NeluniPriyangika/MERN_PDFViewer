const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const winston = require('./config/winston.js');
const authRoutes = require('./routes/auth.js');
const pdfRoutes = require('./routes/pdf.js');
const authMiddleware = require('./middlewares/authMiddleware.js');

//console.log ("hi neluni")

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(morgan('combined', { stream: winston.stream }));


// Database Connection
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/pdf', authMiddleware, pdfRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
