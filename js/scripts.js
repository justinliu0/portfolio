$(document).ready(function() {
  var scrollSpeed = 500; // Duration in milliseconds for scroll

  // Scroll handling for smooth scroll links
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    var target = $(this.getAttribute('href'));
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 56
      }, scrollSpeed);
    }
  });

  var $navbar = $('#navbar');
  var $navbarBrand = $('.navbar-brand');
  var $scrollToTopBtn = $('.scroll-to-top');

  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 0) {
      $navbar.addClass('scrolled');
      $navbarBrand.removeClass('expanded');

      if ($(this).scrollTop() > 100) {
        $scrollToTopBtn.addClass('visible');
      } else {
        $scrollToTopBtn.removeClass('visible');
      }
    } else {
      $navbar.removeClass('scrolled');
      $navbarBrand.addClass('expanded');
      $scrollToTopBtn.removeClass('visible');
    }
  });

  $scrollToTopBtn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, scrollSpeed);
  });
});
