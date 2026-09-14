const express = require("express");
const Appointment = require("../models/Appointment");

const router = express.Router();

// Add appointment
router.post("/", async (req, res) => {
    try {
        const appointment = new Appointment(req.body);
        const savedAppointment = await appointment.save();

        res.status(201).json(savedAppointment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all appointments
router.get("/", async (req, res) => {
    try {
        const appointments = await Appointment.find();

        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;