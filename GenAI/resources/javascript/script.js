// Function to add 'active' class to the navigation link when scrolled into view
function setActiveNavLink() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.navbar a');

    // Add event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove 'active' class from all links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add 'active' class to the clicked link
            this.classList.add('active');
        });
    });

    // Add scroll event listener to check which section is in view
    window.addEventListener('scroll', function() {
        // Get the current scroll position
        const scrollPosition = window.scrollY;

        // Check each section to see if it's in view
        document.querySelectorAll('section').forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= top && scrollPosition < top + height) {
                // Remove 'active' class from all navigation links
                navLinks.forEach(link => link.classList.remove('active'));

                // Add 'active' class to the corresponding navigation link
                document.querySelector(`.navbar a[href="#${sectionId}"]`).classList.add('active');
            }
        });
    });
}
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const element = entry.target.querySelector('.noanimfornow');

            if (entry.isIntersecting) {
                element.classList.add('animateme');
                return; // if we added the class, exit the function
            }

            // We're not intersecting, so remove the class!
            element.classList.remove('animateme');
        });
    });

    observer.observe(document.querySelector('.animwrapper'));
});
// Run the function on page load
window.onload = setActiveNavLink;


document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});
