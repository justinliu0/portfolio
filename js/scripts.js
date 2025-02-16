$(document).ready(function () {

  $("#copyright-year").text(new Date().getFullYear());

  var navbar = $(".navbar");
  var navbar = $(".navbar");
  var sections = $("section");
  var navLinks = $(".navbar-nav .nav-link");

  function navbarCollapse() {
    if ($(window).scrollTop() > 50) {
      navbar.addClass("navbar-shrink");
    } else {
      navbar.removeClass("navbar-shrink");
    }
  }

  navbarCollapse();
  $(window).scroll(navbarCollapse);

  function activateNavLink() {
    var scrollPosition = $(window).scrollTop();

    sections.each(function () {
      var sectionTop = $(this).offset().top - 80; 
      var sectionBottom = sectionTop + $(this).outerHeight();
      var sectionId = $(this).attr("id");

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        navLinks.removeClass("active"); 
        $(".navbar-nav .nav-link[href='#" + sectionId + "']").addClass("active"); 
      }
    });
  }

  $(window).on("scroll", activateNavLink);
});
