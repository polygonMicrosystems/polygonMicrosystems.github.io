// Arqueologicos.js

document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', () => {
        window.location.href = 'Arqueologicos.html';
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add interactive elements like modals (example placeholder)
    // Placeholder function to demonstrate adding interactive elements
    function showModal(content) {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `<div class="modal-content">${content}</div>`;
        document.body.appendChild(modal);
        modal.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
    }

    // Example of using the showModal function
    const images = document.querySelectorAll('.image-container img');
    images.forEach(img => {
        img.addEventListener('click', () => {
            showModal(`<img src="${img.src}" alt="${img.alt}" style="width:100%;">`);
        });
    });
});
