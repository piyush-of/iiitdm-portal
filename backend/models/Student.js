const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    time: { type: String, required: true },
    title: { type: String, required: true },
    location: { type: String, required: true },
    color: { type: String, default: 'secondary' }
});

const studentSchema = new mongoose.Schema({
    rollNumber: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    name: { type: String, required: true },
    cgpa: { type: String, default: '0.00' },
    cgpaTrend: { type: String, default: '+0.00' },
    credits: { type: Number, default: 0 },
    attendance: { type: Number, default: 100 },
    highestPackage: { type: String, default: '0' },
    newOpportunities: { type: Number, default: 0 },
    schedule: [scheduleSchema]
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
