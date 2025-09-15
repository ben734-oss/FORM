// Form validation and WhatsApp integration
document.addEventListener('DOMContentLoaded', function() {
    const applicationForm = document.getElementById('nannyApplicationForm');
    
    if (applicationForm) {
        applicationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form
            if (validateForm()) {
                // If validation passes, send data via WhatsApp
                sendWhatsAppMessage();
            }
        });
    }
    
    function validateForm() {
        // Get form values
        const fullName = document.getElementById('fullName').value.trim();
        const dob = document.getElementById('dob').value;
        const contactNumber = document.getElementById('contactNumber').value.trim();
        const email = document.getElementById('email').value.trim();
        const educationLevel = document.getElementById('educationLevel').value;
        const skills = document.querySelectorAll('input[name="skills"]:checked');
        const experience = document.getElementById('experience').value.trim();
        const nationality = document.getElementById('nationality').value.trim();
        const reference = document.getElementById('reference').value.trim();
        
        // Basic validation
        if (!fullName) {
            alert('Please enter your full name');
            return false;
        }
        
        if (!dob) {
            alert('Please enter your date of birth');
            return false;
        }
        
        if (!contactNumber) {
            alert('Please enter your contact number');
            return false;
        }
        
        if (!email) {
            alert('Please enter your email address');
            return false;
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return false;
        }
        
        // Check education level
        if (!educationLevel) {
            alert('Please select your education level');
            return false;
        }
        
        // Must be SHS graduate or higher
        if (educationLevel === 'Other') {
            alert('You must be at least an SHS graduate to apply');
            return false;
        }
        
      
        if (!experience) {
            alert('Please provide your work experience and references');
            return false;
        }
        
        if (!nationality) {
            alert('Please enter your nationality');
            return false;
        }
        
        if (!reference) {
            alert('Please provide a reference contact');
            return false;
        }
        
        return true;
    }
    
    function sendWhatsAppMessage() {
        // Get form values
        const fullName = document.getElementById('fullName').value.trim();
        const dob = document.getElementById('dob').value;
        const contactNumber = document.getElementById('contactNumber').value.trim();
        const email = document.getElementById('email').value.trim();
        const educationLevel = document.getElementById('educationLevel').value;
        const skills = document.querySelectorAll('input[name="skills"]:checked');
        const experience = document.getElementById('experience').value.trim();
        const nationality = document.getElementById('nationality').value.trim();
        const reference = document.getElementById('reference').value.trim();
        const cv = document.getElementById('cv').files[0];
        
        // Format skills as comma-separated string
        const skillsList = Array.from(skills).map(skill => skill.value).join(', ');
        
        // Create message text
        const message = `New Nanny Application:
        
Name: ${fullName}
Date of Birth: ${dob}
Contact Number: ${contactNumber}
Email: ${email}
Education Level: ${educationLevel}
Skills: ${skillsList}
Experience/References: ${experience}
Nationality: ${nationality}
Reference: ${reference}
        
CV: ${cv ? cv.name : 'Not provided'}`;
        
        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);
        
        // Replace with your actual phone number (with country code but without + or 00)
        const phoneNumber = "1234567890";
        
        // Create WhatsApp URL
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        // Open WhatsApp in a new tab
        window.open(whatsappURL, '_blank');
        
        // Show success message
        alert('Your application has been submitted successfully! We will contact you soon.');
        
        // Reset form
        document.getElementById('nannyApplicationForm').reset();
    }
});
