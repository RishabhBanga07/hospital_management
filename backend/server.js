
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const patientRoutes = require("./routes/patientRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const medicalRecordRoutes = require("./routes/medicalRecordRoutes");


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error.message);
    });

app.use("/api/patients", patientRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/records", medicalRecordRoutes);

app.get("/", (req, res) => {
    res.send("Hospital Management System API is running");
});

const PORT = process.env.PORT || 5001;
app.get("/api/dashboard", async (req, res) => {
    try {
        const Patient = require("./models/Patient");
        const Doctor = require("./models/Doctor");
        const Appointment = require("./models/Appointment");
        const MedicalRecord = require("./models/MedicalRecord");

        const patients = await Patient.countDocuments();
        const doctors = await Doctor.countDocuments();
        const appointments = await Appointment.countDocuments();
        const records = await MedicalRecord.countDocuments();

        res.json({
            patients,
            doctors,
            appointments,
            records
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

app.listen(process.env.PORT || 5001, () => { console.log("Server running on port " + (process.env.PORT || 5001)); });