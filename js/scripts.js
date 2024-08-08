document.addEventListener('DOMContentLoaded', function () {
  var navbar = document.getElementById('navbar');
  var prevScrollPos = window.pageYOffset;

  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 56) {
      navbar.style.top = "0"; // Show the navbar
    } else {
      navbar.style.top = "-56px"; // Hide the navbar initially
    }
    prevScrollPos = currentScrollPos;
  };
});
