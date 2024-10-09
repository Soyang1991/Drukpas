function validateForm() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;
    const errorMessage = document.getElementById('error-message');

    errorMessage.textContent = '';

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
        return false;
    }

    return true;
}

//Dashboard highlight 
const currentLocation = window.location.href;

// Get all navbar links
const navLinks = document.querySelectorAll('.dashboard-nav-menu ul li a');

// Loop through the links
navLinks.forEach(link => {
    if (link.href === currentLocation) {
        link.classList.add('dashboard-active');
    }
});

//Contact Form Validation
 function validateForm() {
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    if (email === "" || subject === "" || message === "") {
        errorMessage.textContent = "All fields are required!!";
        errorMessage.style.color = "red";
        return false;
    }

    errorMessage.textContent = "";
    return true;
}