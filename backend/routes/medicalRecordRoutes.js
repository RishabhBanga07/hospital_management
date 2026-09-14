const express = require("express");
const MedicalRecord = require("../models/MedicalRecord");

const router = express.Router();

// Add medical record
router.post("/", async (req, res) => {
    try {
        const record = new MedicalRecord(req.body);
        const savedRecord = await record.save();

        res.status(201).json(savedRecord);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all medical records
router.get("/", async (req, res) => {
    try {
        const records = await MedicalRecord.find();

        res.json(records);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;