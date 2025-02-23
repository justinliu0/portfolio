$(document).ready(function () {
    $("#copyright-year").text(new Date().getFullYear());

    var navbar = $(".navbar");
    var sections = $("section");
    var navLinks = $(".navbar-nav .nav-link");

    function navbarCollapse() {
        navbar.toggleClass("navbar-shrink", $(window).scrollTop() > 50);
    }

    navbarCollapse();
    $(window).scroll(navbarCollapse);

    function activateNavLink() {
        var scrollPosition = $(window).scrollTop();
        var closestSection = null;
        var minDistance = Infinity;

        sections.each(function () {
            var section = $(this);
            var sectionTop = section.offset().top - 100;
            var distance = Math.abs(scrollPosition - sectionTop);

            if (distance < minDistance) {
                minDistance = distance;
                closestSection = section;
            }
        });

        if (closestSection) {
            var sectionId = closestSection.attr("id");
            navLinks.removeClass("active");
            $(".navbar-nav .nav-link[href='#" + sectionId + "']").addClass("active");
        }
    }

    activateNavLink();
    $(window).on("scroll", activateNavLink);

    (function () {
        const horizontalContainer = document.getElementById("projects");
        const horizontalWrapper = horizontalContainer?.querySelector(".horizontal-wrapper");

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
