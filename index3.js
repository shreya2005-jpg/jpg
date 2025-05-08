document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let fullName = document.getElementById('fullName').value.trim();
    let nameParts = fullName.split(' ');
    
    if (nameParts.length < 2) {
        alert("Please enter a full name with at least first and last name.");
        return;
    }
    
    let firstName = nameParts[0];
    let middleName = nameParts.length > 2 ? nameParts[1] : "";
    let lastName = nameParts[nameParts.length - 1];

    let aadhar = document.getElementById('aadhar').value.trim();
    let pan = document.getElementById('pan').value.trim();
    let mobile = document.getElementById('mobile').value.trim();
    let dob = document.getElementById('dob').value;
    let marksInput = document.getElementById('marks').value.trim();

    if (!/^\d{12}$/.test(aadhar)) {
        alert("Aadhar number should be a 12-digit numeric value.");
        return;
    }

    if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(pan)) {
        alert("Invalid PAN card format.");
        return;
    }

    if (!/^\d{10}$/.test(mobile)) {
        alert("Mobile number should be a 10-digit numeric value.");
        return;
    }

    if (!dob) {
        alert("Please select a valid date of birth.");
        return;
    }

    let marksArray = marksInput.split(',').map(Number).filter(num => !isNaN(num));
    if (marksArray.length !== 6) {
        alert("Please enter 6 numeric marks, separated by commas.");
        return;
    }

    marksArray.sort((a, b) => b - a); // Sort in descending order
    let bestFiveAverage = (marksArray.slice(0, 5).reduce((acc, mark) => acc + mark, 0)) / 5;

    document.getElementById('result').innerText = `Full Name: ${firstName} ${middleName} ${lastName}
    Best of Five Percentage: ${bestFiveAverage.toFixed(2)}%`;
});