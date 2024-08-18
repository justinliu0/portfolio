document.addEventListener('DOMContentLoaded', function () {
  var navbar = document.getElementById('navbar');
  var navbarBrand = document.querySelector('.navbar-brand');
  var scrollToTopBtn = document.querySelector('.scroll-to-top');
  var expandableSections = document.querySelectorAll('.expandable-section');

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
      var portfolioButtons = section.querySelectorAll('.portfolio-buttons a');
      var socialButtons = section.querySelectorAll('.social-button');
      var profilePic = section.querySelector('.profile-pic');
      var projectsButton = document.querySelector('.btn-visit-github');

      if (sectionRect.top < windowHeight * 0.5 && sectionRect.bottom > windowHeight * 0.5) {
        section.classList.add('expanded');
        portfolioButtons.forEach(button => button.classList.add('expanded'));
        socialButtons.forEach(button => button.classList.add('expanded'));
        projectsButton.classList.add('expanded');
        if (profilePic) {
          profilePic.classList.add('profile-pic-border-changed');
        }
      } else {
        section.classList.remove('expanded');
        portfolioButtons.forEach(button => button.classList.remove('expanded'));
        socialButtons.forEach(button => button.classList.remove('expanded'));
        projectsButton.classList.remove('expanded');
        if (profilePic) {
          profilePic.classList.remove('profile-pic-border-changed');
        }
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
