$(document).ready(function () {
  var navbar = $(".navbar");

  function navbarCollapse() {
    if ($(window).scrollTop() > 50) {
      navbar.addClass("navbar-shrink");
    } else {
      navbar.removeClass("navbar-shrink");
    }
  }

  navbarCollapse();

  $(window).scroll(navbarCollapse);
});
