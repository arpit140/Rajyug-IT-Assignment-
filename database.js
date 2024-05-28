const mysql = require('mysql');

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '7488552785aA@',
    database: 'appointment_system'
});

// Connect
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected...');

    // SQL query to create appointments table
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS appointments (
            id INT AUTO_INCREMENT PRIMARY KEY,
            patientName VARCHAR(255) NOT NULL,
            age INT NOT NULL,
            contactNumber VARCHAR(20) NOT NULL,
            gender ENUM('male', 'female', 'other') NOT NULL,
            selectDoctor VARCHAR(100) NOT NULL,
            appointmentDate DATETIME NOT NULL,
            appointmentTitle VARCHAR(255) NOT NULL,
            walkInAppointment BOOLEAN NOT NULL,
            bp VARCHAR(20) NOT NULL,
            height VARCHAR(20) NOT NULL,
            weight VARCHAR(20) NOT NULL,
            spo2 VARCHAR(20) NOT NULL,
            temp VARCHAR(20) NOT NULL,
            pulseRate VARCHAR(20) NOT NULL,
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `;

    // Execute the create table query
    db.query(createTableQuery, (err, result) => {
        if (err) {
            console.error('Error creating appointments table:', err);
        } else {
            console.log('Appointments table created or already exists');
        }
    });
});


module.exports = db;
