document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        patientName: document.getElementById('patientName').value,
        age: document.getElementById('age').value,
        contactNumber: document.getElementById('contactNumber').value,
        gender: document.getElementById('gender').value,
        selectDoctor: document.getElementById('selectDoctor').value,
        appointmentDate: document.getElementById('appointmentDate').value,
        appointmentTitle: document.getElementById('appointmentTitle').value,
        walkInAppointment: document.getElementById('walkInAppointment').checked,
        bp: document.getElementById('bp').value,
        height: document.getElementById('height').value,
        weight: document.getElementById('weight').value,
        spo2: document.getElementById('spo2').value,
        temp: document.getElementById('temp').value,
        pulseRate: document.getElementById('pulseRate').value
    };

    axios.post('/saveAppointment', formData)
        .then(function(response) {
            console.log('Appointment saved successfully:', response.data);
            alert('Appointment saved successfully!');
            
        })
        .catch(function(error) {
            console.error('Error saving appointment:', error);
            alert('Error saving appointment. Please try again.');
        });
});


document.getElementById('seeAppointments').addEventListener('click', function(event) {
    event.preventDefault();
    window.location.href = '/pastAppointments';
});
