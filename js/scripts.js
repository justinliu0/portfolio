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

        sections.each(function () {
            var section = $(this);
            var sectionTop = section.offset().top - 120; 
            var sectionBottom = sectionTop + section.outerHeight();
            var sectionId = section.attr("id");

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeLink = $(".navbar-nav .nav-link[href='#" + sectionId + "']");
            }
        });

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
            const maxScrollX = -3000;

            if (scrollY < containerTop) {
                horizontalWrapper.css("transform", "translateX(0px)");
            } else if (scrollY > containerTop + containerHeight) {
                horizontalWrapper.css("transform", `translateX(${maxScrollX}px)`);
            } else {
                const scrollDistance = scrollY - containerTop;
                const clampedScroll = Math.max(0, Math.min(scrollDistance, maxScrollX));
                horizontalWrapper.css("transform", `translateX(-${clampedScroll}px)`);
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
