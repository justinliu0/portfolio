document.addEventListener('DOMContentLoaded', function () {
  var navbar = document.getElementById('navbar');
  var navbarBrand = document.querySelector('.navbar-brand');
  var scrollToTopBtn = document.querySelector('.scroll-to-top');
  var expandableSections = document.querySelectorAll('.expandable-section');
  var portfolioButtons = document.querySelectorAll('.portfolio-buttons a');
  var socialButtons = document.querySelectorAll('.social-buttons .social-button');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
      navbarBrand.classList.remove('expanded');

      if (window.scrollY > 100) {
        scrollToTopBtn.classList.add('visible');
      } else {
        scrollToTopBtn.classList.remove('visible');
      }
    } else {
      navbar.classList.remove('scrolled');
      navbarBrand.classList.add('expanded');
      scrollToTopBtn.classList.remove('visible');
    }

    var activeSectionId = '';

    expandableSections.forEach(function (section) {
      var sectionRect = section.getBoundingClientRect();
      var windowHeight = window.innerHeight;

      // Check if the expandable section is in view
      if (sectionRect.top < windowHeight * 0.5 && sectionRect.bottom > windowHeight * 0.5) {
        section.classList.add('expanded');

        // Find the closest parent section
        var parentSection = section.closest('section');
        activeSectionId = parentSection.id;
      } else {
        section.classList.remove('expanded');
      }
    });

    // Activate the corresponding portfolio and social buttons
    portfolioButtons.forEach(function (button) {
      var targetId = button.getAttribute('href').substring(1);
      if (activeSectionId === targetId) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });

    socialButtons.forEach(function (button) {
      var targetId = button.getAttribute('href').substring(1);
      if (activeSectionId === targetId) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  });
});
