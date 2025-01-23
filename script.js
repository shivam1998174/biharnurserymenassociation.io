const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Toggle navbar visibility on hamburger click
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Hide navbar on nav link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});


// Add interactivity to text animation
document.querySelector('.animated-text').addEventListener('mouseover', () => {
  document.querySelector('.animated-text').style.color = '#000';
});

document.querySelector('.animated-text').addEventListener('mouseout', () => {
  document.querySelector('.animated-text').style.color = 'white';
});

// Add interactivity to the image
const image = document.querySelector('.animated-image');

image.addEventListener('mouseover', () => {
  image.style.filter = 'brightness(1.2)';
});

image.addEventListener('mouseout', () => {
  image.style.filter = 'brightness(1)';
});



