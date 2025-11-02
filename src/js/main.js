// Simple JavaScript for any interactive features
// Currently minimal, but can be expanded as needed

document.addEventListener('DOMContentLoaded', function() {
    // Add any initialization code here
    console.log('Se Casser le Bec YK loaded!');
    
    // Example: Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
