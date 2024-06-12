const mongoose = require('mongoose');

// allowed roles

const userSchema = new mongoose.Schema(
    {
        username: { 
            type: String, 
            required: true, 
            unique: true 
        },
        email: { 
            type: String, 
            required: true, 
            unique: true 
        },
        password: { 
            type: String, 
            required: true 
        },
        role: { 
            type: String, 
            default: 'user' // Default role is 'user' 
        },
    }, 
    { timestamps: true }
);

const User = mongoose.model('User', userSchema);
module.exports = User;
