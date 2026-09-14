const mongoose = require("mongoose");

const medicalRecordSchema = new mongoose.Schema({
    patient: {
        type: String,
        required: true
    },

    doctor: {
        type: String,
        required: true
    },

    diagnosis: {
        type: String,
        required: true
    },

    prescription: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("MedicalRecord", medicalRecordSchema);