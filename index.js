document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Set button text
    document.querySelector('section button').textContent = 'Shop Now';

    // Image slideshow for the hero section
    const images = [
        'https://th.bing.com/th/id/OIG2.a.lFOm2dK5Mu.45cEfDW?pid=ImgGn',
        'https://example.com/image2.jpg', // Add your own images
        'https://example.com/image3.jpg'
    ];

    let currentImageIndex = 0;
    const heroSection = document.querySelector('#home');

    const changeImage = () => {
        heroSection.style.backgroundImage = `url('${images[currentImageIndex]}')`;
        currentImageIndex = (currentImageIndex + 1) % images.length;
    };

    setInterval(changeImage, 5000); // Change image every 5 seconds
});
