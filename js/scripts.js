document.addEventListener('DOMContentLoaded', function () {
  var navbar = document.getElementById('navbar');
  var navbarBrand = document.querySelector('.navbar-brand');
  var scrollToTopBtn = document.querySelector('.scroll-to-top');
  var expandableSections = document.querySelectorAll('.expandable-section');
  var projectsSection = document.getElementById('projects');
  var projectsButton = document.querySelector('.btn-visit-github');

  window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;

    if (scrollPosition > 0) {
      navbar.classList.add('scrolled');
      navbarBrand.classList.remove('expanded');
      if (scrollPosition > 100) {
        scrollToTopBtn.classList.add('visible');
      } else {
        scrollToTopBtn.classList.remove('visible');
      }
    } else {
      navbar.classList.remove('scrolled');
      navbarBrand.classList.add('expanded');
      scrollToTopBtn.classList.remove('visible');
    }

    expandableSections.forEach(section => {
      var sectionRect = section.getBoundingClientRect();
      var isInView = sectionRect.top < windowHeight * 0.5 && sectionRect.bottom > windowHeight * 0.5;

      section.classList.toggle('expanded', isInView);
      section.querySelectorAll('.portfolio-buttons a').forEach(button => button.classList.toggle('expanded', isInView));
      section.querySelectorAll('.social-button').forEach(button => button.classList.toggle('expanded', isInView));
      section.querySelector('.profile-pic')?.classList.toggle('profile-pic-border-changed', isInView);

      // Check if the section is the projects section
      if (section === projectsSection) {
        projectsButton?.classList.toggle('expanded', isInView);
      }
    });
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
