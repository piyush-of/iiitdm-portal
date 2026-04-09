const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mock Auth Endpoint
app.post('/api/login', (req, res) => {
    const { rollNumber, password } = req.body;
    // In a real app we would validate these
    res.json({ token: 'mock-jwt-token', userId: 'usr_2024CS1052' });
});

// Mock Profile/Dashboard Endpoint
app.get('/api/student/profile', (req, res) => {
    res.json({
        name: 'Aditya Mehta',
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
