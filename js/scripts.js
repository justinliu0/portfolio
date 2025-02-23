$(document).ready(function () {
    $("#copyright-year").text(new Date().getFullYear());

    var navbar = $(".navbar");
    var sections = $("section");
    var navLinks = $(".navbar-nav .nav-link");

    function navbarCollapse() {
        navbar.toggleClass("navbar-shrink", $(window).scrollTop() > 50);
    }

    navbarCollapse();
    $(window).on("scroll", navbarCollapse);

    function activateNavLink() {
        var scrollPosition = $(window).scrollTop();
        var activeLink = null;
        var projectsSection = $("#projects");
        var timelineSection = $("#timeline");
        var contactSection = $("#contact");

        var projectsTop = projectsSection.offset().top;
        var projectsBottom = projectsTop + projectsSection.outerHeight();
        var timelineTop = timelineSection.offset().top - 120; 
        var contactTop = contactSection.offset().top - 250; 

        sections.each(function () {
            var section = $(this);
            var sectionTop = section.offset().top - 120;
            var sectionBottom = sectionTop + section.outerHeight();
            var sectionId = section.attr("id");

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeLink = $(".navbar-nav .nav-link[href='#" + sectionId + "']");
            }
        });

        if (scrollPosition >= projectsTop && scrollPosition < timelineTop) {
            activeLink = $(".navbar-nav .nav-link[href='#projects']");
        }

        if (scrollPosition >= contactTop) {
            activeLink = $(".navbar-nav .nav-link[href='#contact']");
        }

        navLinks.removeClass("active");
        if (activeLink) activeLink.addClass("active");
    }

    activateNavLink();
    $(window).on("scroll", activateNavLink);

    (function () {
        const horizontalContainer = $("#projects");
        const horizontalWrapper = horizontalContainer.find(".horizontal-wrapper");

        if (!horizontalContainer.length || !horizontalWrapper.length) return;

        function updateHeights() {
            const scrollLength = horizontalWrapper[0].scrollWidth - window.innerWidth;
            horizontalContainer.css("height", window.innerHeight + scrollLength + "px");
        }

        function onScroll() {
            const containerTop = horizontalContainer.offset().top;
            const scrollY = window.scrollY;
            const containerHeight = horizontalContainer.outerHeight();
            const totalScrollWidth = horizontalWrapper[0].scrollWidth - window.innerWidth;

            if (scrollY < containerTop) {
                horizontalWrapper.css("transform", "translateX(0px)");
            } else if (scrollY > containerTop + containerHeight - window.innerHeight) {
                horizontalWrapper.css("transform", `translateX(-${totalScrollWidth}px)`);
            } else {
                const scrollProgress = scrollY - containerTop;
                const clampedProgress = Math.max(0, Math.min(scrollProgress, totalScrollWidth));
                horizontalWrapper.css("transform", `translateX(-${clampedProgress}px)`);
            }
        }

        $(window).on("scroll resize", function () {
            updateHeights();
            onScroll();
        });

        updateHeights();
        onScroll();
    })();
});
