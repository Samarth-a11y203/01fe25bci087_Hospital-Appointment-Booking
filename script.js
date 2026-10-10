document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let fullName = document.getElementById("fullName").value.trim();
    let phoneNumber = document.getElementById("phoneNumber").value.trim();
    let userPassword = document.getElementById("userPassword").value.trim();
    let statusMessage = document.getElementById("registrationMessage");

    if (fullName === "" || phoneNumber === "" || userPassword === "")
    {
        statusMessage.style.color = "red";
        statusMessage.textContent = "Please fill in all the fields.";
        return;
    }

    if (userPassword.length < 6)
    {
        statusMessage.style.color = "red";
        statusMessage.textContent = "Password must contain at least 6 characters.";
        return;
    }

    if (!/^\d{10}$/.test(phoneNumber))
    {
        statusMessage.style.color = "red";
        statusMessage.textContent = "Enter a 10-digit Phone Number.";
        return;
    }

    statusMessage.style.color = "green";
    statusMessage.textContent = "Registration / Login successful!";
});


let currentDate = new Date();

let today = currentDate.getFullYear() + "-" +
    String(currentDate.getMonth() + 1).padStart(2, "0") + "-" +
    String(currentDate.getDate()).padStart(2, "0");

document.getElementById("bookingDate").min = today;


document.getElementById("bookingForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let bookingPatientName = document.getElementById("bookingPatient").value.trim();
    let doctorName = document.getElementById("selectedDoctor").value;
    let bookingDateValue = document.getElementById("bookingDate").value;
    let bookingTimeValue = document.getElementById("bookingTime").value;
    let bookingReasonValue = document.getElementById("bookingReason").value.trim();
    let bookingError = document.getElementById("bookingError");

    if (bookingPatientName === "" || doctorName === "" ||
        bookingDateValue === "" || bookingTimeValue === "" ||
        bookingReasonValue === "")
    {
        bookingError.textContent = "Please fill in all the required fields.";
        return;
    }

    if (bookingDateValue < today)
    {
        bookingError.textContent = "Please select today or a future date.";
        return;
    }

    bookingError.textContent = "";

    document.getElementById("displayPatient").textContent = bookingPatientName;
    document.getElementById("displayDoctor").textContent = doctorName;
    document.getElementById("displayDate").textContent = bookingDateValue;
    document.getElementById("displayTime").textContent = bookingTimeValue;

    document.getElementById("bookingConfirmation").style.display = "block";

    document.getElementById("bookingConfirmation").scrollIntoView({
        behavior: "smooth"
    });
});