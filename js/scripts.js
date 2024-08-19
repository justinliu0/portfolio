document.addEventListener('DOMContentLoaded', function () {
  var navbar = document.getElementById('navbar');
  var navbarBrand = document.querySelector('.navbar-brand');
  var scrollToTopBtn = document.querySelector('.scroll-to-top');
  var expandableSections = document.querySelectorAll('.expandable-section');
  var projectsButton = document.querySelector('.projects-button a');
  var projectsSection = document.getElementById('projects');

  window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;

    navbar.classList.toggle('scrolled', scrollPosition > 0);
    navbarBrand.classList.toggle('expanded', scrollPosition === 0);
    scrollToTopBtn.classList.toggle('visible', scrollPosition > 100);

    expandableSections.forEach(section => {
      var sectionRect = section.getBoundingClientRect();
      var isInView = sectionRect.top < windowHeight * 0.5 && sectionRect.bottom > windowHeight * 0.5;

      section.classList.toggle('expanded', isInView);
      section.querySelectorAll('.portfolio-buttons a').forEach(button => button.classList.toggle('expanded', isInView));
      section.querySelectorAll('.social-button').forEach(button => button.classList.toggle('expanded', isInView));
      section.querySelector('.profile-pic')?.classList.toggle('profile-pic-border-changed', isInView);
      projectsButton?.classList.toggle('expanded', isInView);
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var targetElement = document.getElementById(this.getAttribute('href').substring(1));
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
