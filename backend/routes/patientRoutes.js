const express = require("express");
const Patient = require("../models/Patient");

const router = express.Router();

// Add patient
router.post("/", async (req, res) => {
    try {
        const patient = new Patient(req.body);
        const savedPatient = await patient.save();

        res.status(201).json(savedPatient);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all patients
router.get("/", async (req, res) => {
    try {
        const patients = await Patient.find();

        res.json(patients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;