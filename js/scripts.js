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
    var projectsSection = $("#projects");
    var timelineSection = $("#timeline");

    var projectsTop = projectsSection.offset().top;
    var projectsBottom = projectsTop + projectsSection.outerHeight();
    var timelineTop = timelineSection.offset().top - 50; //ahdiuahd

    navLinks.removeClass("active");

    sections.each(function () {
      var section = $(this);
      var sectionTop = section.offset().top - 100;
      var sectionBottom = sectionTop + section.outerHeight();
      var sectionId = section.attr("id");

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        $(".navbar-nav .nav-link[href='#" + sectionId + "']").addClass("active");
      }
    });

    if (scrollPosition >= projectsTop && scrollPosition < timelineTop) {
      $(".navbar-nav .nav-link[href='#projects']").addClass("active");
    }
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

    function onScroll() {
      const containerTop = horizontalContainer.offsetTop;
      const scrollY = window.scrollY;
      const containerHeight = parseFloat(horizontalContainer.style.height) || window.innerHeight;
      const maxScrollX = -3000;

      if (scrollY < containerTop) {
        horizontalWrapper.style.transform = `translateX(0px)`;
        return;
      }

      if (scrollY > containerTop + containerHeight) {
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

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", () => {
      updateHeights();
      onScroll();
    });

    updateHeights();
    onScroll();
  })();

});
