// scripts.js

let currentIndex = 0;
const images = document.querySelectorAll('.image-slider img');

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

document.querySelector('.image-slider').addEventListener('click', nextImage);

document.addEventListener('DOMContentLoaded', () => {
    showImage(currentIndex);

    // Autoplay de la galería de imágenes
    setInterval(nextImage, 3000);
});
