/* js/script.js */

document.addEventListener('DOMContentLoaded', function() {
    const galleryImage = document.querySelector('.gallery-image img');
    const prevButton = document.querySelector('#prev-button');
    const nextButton = document.querySelector('#next-button');
    const images = [
        'images/legallysealed.jpg',
        'images/ad1.jpg',
        'images/ruth1.jpg',
        'images/ruth2.jpg',
        'images/ruth3.jpg',
        'images/ruth4.jpg',
        'images/ruth1.jpg',
        'images/ruth2.jpg',
        'images/ruth3.jpg',
        'images/ruth4.jpg',
        'images/ruth1.jpg',
        'images/ruth2.jpg',
    ];
    let currentIndex = 0;

    function updateGallery() {
        galleryImage.src = images[currentIndex];
    }

    if (prevButton && nextButton && galleryImage) {
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateGallery();
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateGallery();
        });

        updateGallery(); // Initial display
    }
});

