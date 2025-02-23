$(document).ready(function () {

  $("#copyright-year").text(new Date().getFullYear());

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
      var sectionTop = $(this).offset().top - 150; 
      var sectionBottom = sectionTop + $(this).outerHeight();
      var sectionId = $(this).attr("id");

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        navLinks.removeClass("active"); 
        $(".navbar-nav .nav-link[href='#" + sectionId + "']").addClass("active"); 
      }
    });
  }

  activateNavLink(); 
  $(window).on("scroll", activateNavLink);

  (function () {
    const horizontalContainer = document.getElementById('projects');
    const horizontalWrapper = horizontalContainer?.querySelector('.horizontal-wrapper');
    if (!horizontalContainer || !horizontalWrapper) return;

    function updateHeights() {
        const totalWidth = horizontalWrapper.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollLength = totalWidth - viewportWidth;
        const finalHeight = window.innerHeight + scrollLength;

        horizontalContainer.style.height = `${finalHeight}px`;
    }

    function onScroll(event) {
        const containerTop = horizontalContainer.offsetTop;
        const scrollY = window.scrollY;
        const containerHeight = parseFloat(horizontalContainer.style.height) || window.innerHeight;
        const containerBottom = containerTop + containerHeight;
        const maxScrollX = -3000;

        if (scrollY < containerTop) {
            horizontalWrapper.style.transform = `translateX(0px)`;
            return;
        }

        if (scrollY > containerBottom) {
            horizontalWrapper.style.transform = `translateX(${maxScrollX}px)`;
            return;
        }

        const distance = scrollY - containerTop;
        const totalWidth = horizontalWrapper.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollLength = totalWidth - viewportWidth;
        const clamped = Math.max(0, Math.min(distance, scrollLength));

        horizontalWrapper.style.transform = `translateX(-${clamped}px)`;
    }

    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', () => {
        updateHeights();
        onScroll();
    });

    updateHeights();
    onScroll();
  })();

});
