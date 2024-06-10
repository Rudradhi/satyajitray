
let currentIndex = 0;

function slideImages() {
    const sliderImages = document.querySelector('.slider-wrapper');
    const images = document.querySelectorAll('.slider');
    const totalImages = images.length;
    
    // Calculate the new position
    currentIndex = (currentIndex + 1) % totalImages;
    
    // Move the slider to the new position
    sliderImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Set the interval for sliding images
setInterval(slideImages, 300); // Change the interval as needed



  
  

