// scripts.js
document.addEventListener('DOMContentLoaded', function () {
  var navbar = document.getElementById('navbar');
  var scrollToTopBtn = document.querySelector('.scroll-to-top');

  // Handle Navbar scroll effects and scroll-to-top button visibility
  window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
      if (window.scrollY > 100) {
        scrollToTopBtn.classList.add('visible'); 
      } else {
        scrollToTopBtn.classList.remove('visible'); 
      }
    } else {
      navbar.classList.remove('scrolled');
      scrollToTopBtn.classList.remove('visible'); 
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a.js-scroll-trigger[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      var targetId = this.getAttribute('href').substring(1);
      var targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 56, // Adjust for navbar height
          behavior: 'smooth'
        });
      }
    });
  });

  // Scroll to top when button is clicked
  scrollToTopBtn.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Initialize Bootstrap ScrollSpy
  var scrollspy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar'
  });
});
