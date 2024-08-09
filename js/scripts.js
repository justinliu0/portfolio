document.addEventListener('DOMContentLoaded', function () {
  var navbar = document.getElementById('navbar');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled'); 
    } else {
      navbar.classList.remove('scrolled'); 
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      var targetId = this.getAttribute('href').substring(1);
      var targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 56, // Adjust scroll position by 56 pixels
          behavior: 'smooth'
        });
      }
    });
  });
});
