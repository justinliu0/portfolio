document.addEventListener('DOMContentLoaded', function () {
  var navbar = document.getElementById('navbar');
  var navbarBrand = document.querySelector('.navbar-brand');
  var scrollToTopBtn = document.querySelector('.scroll-to-top');
  var expandableSections = document.querySelectorAll('.expandable-section');
  var skillsSection = document.getElementById('skills'); 
  var skillDivs = document.querySelectorAll('.skills-content > div');

  window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;

    // Handle navbar and scroll-to-top button
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

    // Handle expandable sections
    expandableSections.forEach(section => {
      var sectionRect = section.getBoundingClientRect();
      var portfolioButtons = section.querySelectorAll('.portfolio-buttons a');
      var socialButtons = section.querySelectorAll('.social-button');
      var profilePic = section.querySelector('.profile-pic');

      if (sectionRect.top < windowHeight * 0.5 && sectionRect.bottom > windowHeight * 0.5) {
        section.classList.add('expanded');
        portfolioButtons.forEach(button => button.classList.add('expanded'));
        socialButtons.forEach(button => button.classList.add('expanded'));
        if (profilePic) {
          profilePic.classList.add('profile-pic-border-changed');
        }
      } else {
        section.classList.remove('expanded');
        portfolioButtons.forEach(button => button.classList.remove('expanded'));
        socialButtons.forEach(button => button.classList.remove('expanded'));
        if (profilePic) {
          profilePic.classList.remove('profile-pic-border-changed');
        }
      }
    });

    // Handle skills section color change
    var skillsRect = skillsSection.getBoundingClientRect();
    var skillsSectionTop = skillsRect.top;
    var skillsSectionBottom = skillsRect.bottom;

    console.log('Skills Section Top:', skillsSectionTop);
    console.log('Skills Section Bottom:', skillsSectionBottom);
    console.log('Window Height:', windowHeight);

    if (skillsSectionTop < windowHeight * 0.75 && skillsSectionBottom > windowHeight * 0.25) {
      console.log('Skills section in view');
      skillDivs.forEach(div => div.classList.add('color-changed'));
    } else {
      skillDivs.forEach(div => div.classList.remove('color-changed'));
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
