$(document).ready(function () {
    $("#copyright-year").text(new Date().getFullYear());

    var navbar = $(".navbar");
    var sections = $("section");
    var navLinks = $(".navbar-nav .nav-link");
    var horizontalContainer = $("#projects");
    var horizontalWrapper = $(".horizontal-wrapper");

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
        var windowHeight = $(window).height();

        var containerTop = horizontalContainer.offset().top;
        var containerHeight = horizontalContainer.outerHeight();
        var containerBottom = containerTop + containerHeight;

        var timelineTop = $("#timeline").offset().top;
        var timelineBottom = timelineTop + $("#timeline").outerHeight();

        var contactTop = $("#contact").offset().top;

        var projectsLink = $(".navbar-nav .nav-link[href='#projects']");
        var timelineLink = $(".navbar-nav .nav-link[href='#timeline']");
        var contactLink = $(".navbar-nav .nav-link[href='#contact']");

        navLinks.removeClass("active");

        if (scrollPosition >= containerTop && scrollPosition < containerBottom) {
            projectsLink.addClass("active");
        }

        if (scrollPosition >= containerBottom && scrollPosition < timelineTop - windowHeight / 2) {
            projectsLink.addClass("active");
        }

        if (scrollPosition >= timelineTop - windowHeight / 2 && scrollPosition < timelineBottom) {
            timelineLink.addClass("active");
        }

        if (scrollPosition >= timelineBottom - windowHeight / 3) {
            contactLink.addClass("active");
        }
    }

    activateNavLink();
    $(window).on("scroll", activateNavLink);

    (function () {
        if (!horizontalContainer.length || !horizontalWrapper.length) return;

        function updateHeights() {
            const totalWidth = horizontalWrapper[0].scrollWidth;
            const viewportWidth = window.innerWidth;
            const scrollLength = totalWidth - viewportWidth;
            const finalHeight = window.innerHeight + scrollLength;

            horizontalContainer.css("height", `${finalHeight}px`);
        }

        function onScroll() {
            const containerTop = horizontalContainer.offset().top;
            const scrollY = window.scrollY;
            const containerHeight = parseFloat(horizontalContainer.css("height")) || window.innerHeight;
            const containerBottom = containerTop + containerHeight;
            const maxScrollX = -3000;

            if (scrollY < containerTop) {
                horizontalWrapper.css("transform", `translateX(0px)`);
                return;
            }

            if (scrollY > containerBottom) {
                horizontalWrapper.css("transform", `translateX(${maxScrollX}px)`);
                return;
            }

            const distance = scrollY - containerTop;
            const totalWidth = horizontalWrapper[0].scrollWidth;
            const viewportWidth = window.innerWidth;
            const scrollLength = totalWidth - viewportWidth;
            const clamped = Math.max(0, Math.min(distance, scrollLength));

            horizontalWrapper.css("transform", `translateX(-${clamped}px)`);
        }

        $(window).on("scroll", onScroll);
        $(window).on("resize", () => {
            updateHeights();
            onScroll();
        });

        updateHeights();
        onScroll();
    })();
});
