const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB Connection Logic
const MONGODB_URI = process.env.MONGO_URI;
let isDbConnected = false;

if (MONGODB_URI) {
    mongoose.connect(MONGODB_URI)
        .then(() => {
            console.log('✅ Connected to MongoDB Backend');
            isDbConnected = true;
        })
        .catch(err => {
            console.error('❌ Failed to connect to MongoDB:', err.message);
            console.log('⚠️ Falling back to mock data mode.');
        });
} else {
    console.log('⚠️ Warning: MONGO_URI is not set. Running backend in Offline Mock Mode.');
}

const Student = require('./models/Student');

// Authentic / Mock Auth Endpoint
app.post('/api/login', async (req, res) => {
    const { rollNumber, password } = req.body;
    
    if (isDbConnected) {
        try {
            // For production, you should hash the password or use bcrypt
            const user = await Student.findOne({ rollNumber });
            if (!user || user.passwordHash !== password) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }
            return res.json({ token: 'secure-jwt-token', userId: user._id, name: user.name });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Database authentication failed' });
        }
    }
    
    // Mock Fallback
    res.json({ token: 'mock-jwt-token', userId: 'usr_2024CS1052', name: 'Aditya' });
});

// Authentic / Mock Profile/Dashboard Endpoint
app.get('/api/student/profile', async (req, res) => {
    if (isDbConnected) {
        try {
            // In a real app, grab userId from auth token instead of hardcoding
            const user = await Student.findOne(); 
            if (user) {
                return res.json(user);
            }
        } catch (error) {
            console.error(error);
        }
    }

    // Mock Fallback
    res.json({
        name: 'Aditya',
        cgpa: '8.75',
        cgpaTrend: '+0.12',
        credits: 142,
        attendance: 88,
        highestPackage: '87.54',
        newOpportunities: 12,
        schedule: [
            { time: '09:00', title: 'Distributed Systems', location: 'CR-102', color: 'secondary' },
            { time: '11:30', title: 'Machine Learning Lab', location: 'Computing Center 2', color: 'slate-300' },
            { time: '15:00', title: 'Placement Prep Seminar', location: 'Auditorium', color: 'orange-500' }
        ]
    });
});

app.listen(port, () => {
    console.log(`IIITDM Portal Backend running at port ${port}`);
});
