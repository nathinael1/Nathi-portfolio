// Toggle mobile menu visibility
function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
}

// Smooth scrolling for anchor links
const navLinkElements = document.querySelectorAll('.nav-box a');

navLinkElements.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });

        const navMenu = document.getElementById("nav-links");
        if (navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
        }
    });
});

// Toggle dark and light theme
function toggleTheme() {
    const body = document.body;
    const lightIcon = document.getElementById('light-icon');
    const darkIcon = document.getElementById('dark-icon');

    // Toggle the dark-mode class on the body element
    body.classList.toggle('dark-mode');
    
    // Switch between light and dark mode icons
    if (body.classList.contains('dark-mode')) {
        lightIcon.style.opacity = '0'; // Hide the light (sun) icon
        darkIcon.style.opacity = '1'; // Show the dark (moon) icon
    } else {
        lightIcon.style.opacity = '1'; // Show the light (sun) icon
        darkIcon.style.opacity = '0'; // Hide the dark (moon) icon
    }
}
