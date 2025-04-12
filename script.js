// Show disclaimer modal on page load
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('disclaimerModal');
    const acceptButton = document.getElementById('acceptDisclaimer');
    
    // Always show the modal on page load
    modal.style.display = 'flex';

    // Handle disclaimer acceptance
    acceptButton.addEventListener('click', function() {
        modal.style.display = 'none';
        localStorage.setItem('disclaimerAccepted', 'true');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message. We will get back to you soon.');
        this.reset();
    });
} 