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


// -------------------------------------------------------contact-page
$(document).ready(function(){
  $('#contactForm').submit(function(event){
      event.preventDefault();
      alert("Thank you! Your message has been sent.");
      $(this).trigger("reset");
  });
});


