const express = require("express");
const Doctor = require("../models/Doctor");

const router = express.Router();

// Add doctor
router.post("/", async (req, res) => {
    try {
        const doctor = new Doctor(req.body);
        const savedDoctor = await doctor.save();

        res.status(201).json(savedDoctor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all doctors
router.get("/", async (req, res) => {
    try {
        const doctors = await Doctor.find();

        res.json(doctors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;