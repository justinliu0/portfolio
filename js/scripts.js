document.addEventListener('DOMContentLoaded', function () {
  var navbar = document.getElementById('navbar');
  var navbarBrand = document.querySelector('.navbar-brand');
  var scrollToTopBtn = document.querySelector('.scroll-to-top');
  var aboutSection = document.getElementById('about');

  window.addEventListener('scroll', function() {
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

    // Check if the About section is fully in view
    var aboutSectionRect = aboutSection.getBoundingClientRect();
    var aboutSectionTop = aboutSectionRect.top;
    var aboutSectionBottom = aboutSectionRect.bottom;
    var windowHeight = window.innerHeight;

    // Trigger effect only when the "About" section is fully visible
    if (aboutSectionTop >= windowHeight / 4 && aboutSectionBottom <= windowHeight * 3 / 4) {
      aboutSection.classList.add('in-view');
    } else {
      aboutSection.classList.remove('in-view');
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      var targetId = this.getAttribute('href').substring(1);
      var targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 56, 
          behavior: 'smooth'
        });
      }
    });
  });

  scrollToTopBtn.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
