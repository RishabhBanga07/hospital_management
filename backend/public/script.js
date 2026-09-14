const loginForm = document.getElementById("loginForm");

if (loginForm) {
loginForm.addEventListener("submit", function(event) {
event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "admin@gmail.com" && password === "admin123") {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("message").textContent = "Invalid email or password";
    }
});

}

function showPatientForm() {
document.getElementById("patientForm").style.display = "block";
}

function hidePatientForm() {
document.getElementById("patientForm").style.display = "none";
}

const addPatientForm = document.getElementById("addPatientForm");

if (addPatientForm) {
addPatientForm.addEventListener("submit", async function(event) {
event.preventDefault();

    const patient = {
        name: document.getElementById("patientName").value,
        age: document.getElementById("patientAge").value,
        gender: document.getElementById("patientGender").value,
        phone: document.getElementById("patientPhone").value,
        condition: document.getElementById("patientCondition").value
    };

    try {
        const response = await fetch("/api/patients", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(patient)
        });

        const data = await response.json();

        if (response.ok) {
            alert("Patient added successfully!");
            addPatientForm.reset();
            hidePatientForm();
            loadPatients();
        } else {
            alert(data.message);
        }
    } catch (error) {
        alert("Unable to connect to server");
        console.log(error);
    }
});

}

async function loadPatients() {
const patientTable = document.getElementById("patientTable");

if (!patientTable) {
    return;
}

try {
    const response = await fetch("/api/patients");
    const patients = await response.json();

    patientTable.innerHTML = "";

    patients.forEach((patient, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>P${String(index + 1).padStart(3, "0")}</td>
            <td>${patient.name}</td>
            <td>${patient.age}</td>
            <td>${patient.gender}</td>
            <td>${patient.phone}</td>
            <td>${patient.condition}</td>
        `;

        patientTable.appendChild(row);
    });
} catch (error) {
    console.log(error);
}

}

loadPatients();

function showDoctorForm() {
document.getElementById("doctorForm").style.display = "block";
}

function hideDoctorForm() {
document.getElementById("doctorForm").style.display = "none";
}

const addDoctorForm = document.getElementById("addDoctorForm");

if (addDoctorForm) {
addDoctorForm.addEventListener("submit", async function(event) {
event.preventDefault();

    const doctor = {
        name: document.getElementById("doctorName").value,
        specialization: document.getElementById("doctorSpecialization").value,
        phone: document.getElementById("doctorPhone").value,
        availability: document.getElementById("doctorAvailability").value
    };

    try {
        const response = await fetch("/api/doctors", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(doctor)
        });

        const data = await response.json();

        if (response.ok) {
            alert("Doctor added successfully!");
            addDoctorForm.reset();
            hideDoctorForm();
            loadDoctors();
        } else {
            alert(data.message);
        }
    } catch (error) {
        alert("Unable to connect to server");
        console.log(error);
    }
});

}

async function loadDoctors() {
const doctorTable = document.getElementById("doctorTable");

if (!doctorTable) {
    return;
}

try {
    const response = await fetch("/api/doctors");
    const doctors = await response.json();

    doctorTable.innerHTML = "";

    doctors.forEach((doctor, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>D${String(index + 1).padStart(3, "0")}</td>
            <td>${doctor.name}</td>
            <td>${doctor.specialization}</td>
            <td>${doctor.phone}</td>
            <td>${doctor.availability}</td>
        `;

        doctorTable.appendChild(row);
    });
} catch (error) {
    console.log(error);
}

}

loadDoctors();

function showAppointmentForm() {
document.getElementById("appointmentForm").style.display = "block";
}

function hideAppointmentForm() {
document.getElementById("appointmentForm").style.display = "none";
}

const addAppointmentForm = document.getElementById("addAppointmentForm");

if (addAppointmentForm) {
addAppointmentForm.addEventListener("submit", async function(event) {
event.preventDefault();

    const appointment = {
        patient: document.getElementById("appointmentPatient").value,
        doctor: document.getElementById("appointmentDoctor").value,
        date: document.getElementById("appointmentDate").value,
        time: document.getElementById("appointmentTime").value,
        reason: document.getElementById("appointmentReason").value
    };

    try {
        const response = await fetch("/api/appointments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(appointment)
        });

        const data = await response.json();

        if (response.ok) {
            alert("Appointment added successfully!");
            addAppointmentForm.reset();
            hideAppointmentForm();
            loadAppointments();
        } else {
            alert(data.message);
        }
    } catch (error) {
        alert("Unable to connect to server");
        console.log(error);
    }
});

}

async function loadAppointments() {
const appointmentTable = document.getElementById("appointmentTable");

if (!appointmentTable) {
    return;
}

try {
    const response = await fetch("/api/appointments");
    const appointments = await response.json();

    appointmentTable.innerHTML = "";

    appointments.forEach((appointment, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>A${String(index + 1).padStart(3, "0")}</td>
            <td>${appointment.patient}</td>
            <td>${appointment.doctor}</td>
            <td>${appointment.date}</td>
            <td>${appointment.time}</td>
            <td>${appointment.reason}</td>
        `;

        appointmentTable.appendChild(row);
    });
} catch (error) {
    console.log(error);
}

}

loadAppointments();

function showRecordForm() {
document.getElementById("recordForm").style.display = "block";
}

function hideRecordForm() {
document.getElementById("recordForm").style.display = "none";
}

const addRecordForm = document.getElementById("addRecordForm");

if (addRecordForm) {
addRecordForm.addEventListener("submit", async function(event) {
event.preventDefault();

    const record = {
        patient: document.getElementById("recordPatient").value,
        doctor: document.getElementById("recordDoctor").value,
        diagnosis: document.getElementById("recordDiagnosis").value,
        prescription: document.getElementById("recordPrescription").value
    };

    try {
        const response = await fetch("/api/records", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(record)
        });

        const data = await response.json();

        if (response.ok) {
            alert("Medical record added successfully!");
            addRecordForm.reset();
            hideRecordForm();
            loadRecords();
        } else {
            alert(data.message);
        }
    } catch (error) {
        alert("Unable to connect to server");
        console.log(error);
    }
});

}

async function loadRecords() {
const recordTable = document.getElementById("recordTable");

if (!recordTable) {
    return;
}

try {
    const response = await fetch("/api/records");
    const records = await response.json();

    recordTable.innerHTML = "";

    records.forEach((record, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>R${String(index + 1).padStart(3, "0")}</td>
            <td>${record.patient}</td>
            <td>${record.doctor}</td>
            <td>${record.diagnosis}</td>
            <td>${record.prescription}</td>
        `;

        recordTable.appendChild(row);
    });
} catch (error) {
    console.log(error);
}

}

loadRecords();

async function loadDashboard() {
const patientCount = document.getElementById("patientCount");

if (!patientCount) {
    return;
}

try {
    const response = await fetch("/api/dashboard");
    const data = await response.json();

    document.getElementById("patientCount").textContent = data.patients;
    document.getElementById("doctorCount").textContent = data.doctors;
    document.getElementById("appointmentCount").textContent = data.appointments;
    document.getElementById("recordCount").textContent = data.records;
} catch (error) {
    console.log(error);
}

}

loadDashboard();