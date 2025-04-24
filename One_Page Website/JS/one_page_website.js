// Select all images in the gallery
const images = document.querySelectorAll('.photo img');

// Create the lightbox container
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

// Add event listener to each image
images.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.classList.add('active');
        const img = document.createElement('img');
        img.src = image.getAttribute('data-large'); // Use the large image from the data-large attribute
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
    });
});

// Close the lightbox when clicked
lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
});