const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database'); 

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); 

// Save Appointment Endpoint
app.post('/saveAppointment', (req, res) => {
    const formData = req.body;

    const sql = 'INSERT INTO appointments SET ?';
    db.query(sql, formData, (err, result) => {
        if (err) {
            console.error('Error saving appointment:', err);
            res.status(500).send('Error saving appointment');
        } else {
            console.log('Appointment saved:', result);
            res.send('Appointment saved');
        }
    });
});

// Get Past Appointments Endpoint
app.get('/pastAppointments', (req, res) => {
    const sql = 'SELECT * FROM appointments ORDER BY appointmentDate DESC';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching appointments:', err);
            res.status(500).send('Error fetching appointments');
        } else {
            res.json(results);
        }
    });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
