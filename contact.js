// contact.js

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");

    // Form submission handler
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent default page reload

        // Get values
        const name = form.querySelector("input[type='text']").value.trim();
        const email = form.querySelector("input[type='email']").value.trim();
        const message = form.querySelector("textarea").value.trim();

        // Validation
        if (!name || !email || !message) {
            alert("⚠️ Please fill in all fields before submitting.");
            return;
        }

        if (!validateEmail(email)) {
            alert("❌ Please enter a valid email address.");
            return;
        }

        // Simulate success (replace with backend API later)
        alert(`✅ Thank you, ${name}! Your message has been sent.`);
        form.reset();
    });

    // Social Media Links
    const socialLinks = document.querySelectorAll(".social-icons a");
    socialLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const url = link.getAttribute("href");
            window.open(url, "_blank"); // Open in new tab
        });
    });
});

// Helper function: validate email format
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
