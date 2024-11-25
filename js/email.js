// Initialize Email.js (replace YOUR_USER_ID with your actual Email.js user ID)
emailjs.init("YOUR_USER_ID");

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Email data
    const emailData = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
        to_email: "tchanakira5@gmail.com",
    };

    // Send email using Email.js
    emailjs.send("service_jf1fmpg", "template_n47fsgb", emailData)
        .then(() => {
            // Show popup message
            const popup = document.getElementById("popupMessage");
            popup.style.display = "block";

            // Clear form fields after popup is displayed
            setTimeout(() => {
                popup.style.display = "none";
                document.getElementById("contactForm").reset();
            }, 3000); // Hide the popup after 3 seconds
        })
        .catch((error) => {
            console.error("Failed to send email:", error);
            alert("An error occurred while sending the message. Please try again later.");
        });
});
