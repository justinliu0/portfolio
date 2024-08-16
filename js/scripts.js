<script>
$(document).ready(function() {
  var navbar = $('#navbar');
  var navbarBrand = $('.navbar-brand');
  var scrollToTopBtn = $('.scroll-to-top');

  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 0) {
      navbar.addClass('scrolled');
      navbarBrand.removeClass('expanded');

      if ($(window).scrollTop() > 100) {
        scrollToTopBtn.addClass('visible');
      } else {
        scrollToTopBtn.removeClass('visible');
      }
    } else {
      navbar.removeClass('scrolled');
      navbarBrand.addClass('expanded');
      scrollToTopBtn.removeClass('visible');
    }
  });

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    
    var targetId = $(this).attr('href').substring(1);
    var targetElement = $('#' + targetId);
    
    if (targetElement.length) {
      $('html, body').animate({
        scrollTop: targetElement.offset().top - 56
      }, 800); // Adjust the duration to control the scroll speed
    }
  });

  scrollToTopBtn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 800); // Adjust the duration to control the scroll speed
  });
});
</script>
