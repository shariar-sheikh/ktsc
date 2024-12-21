const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
const slider = document.querySelector('.image-slider');

// Clone the first few images for infinite effect
const images = slider.querySelectorAll('img');
images.forEach((img) => {
    const clone = img.cloneNode(true);
    slider.appendChild(clone);
});



alert("Wellcome to the web of ktsc student webpage . are you student of ktsc , if you are a student  please  visit and enjoy.")