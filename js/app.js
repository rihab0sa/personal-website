// Get all sections and header nav a classes on the page
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

// Add event listener to the window's scroll event
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const { top, height } = section.getBoundingClientRect();
        const id = section.id;

        // Check if the current section is in view
        if (top >= -100 && top < height) {
            navLinks.forEach(link => link.classList.remove('active'));

            // Add 'active' class to the matching nav link
            const matchingLink = document.querySelector(`header nav a[href*="${id}"]`);
            if (matchingLink) matchingLink.classList.add('active');
        }
    });
});