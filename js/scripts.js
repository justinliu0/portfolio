document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.getElementById('navbar');
    var navbarBrand = document.querySelector('.navbar-brand');
    var navLinks = document.querySelectorAll('.navbar-nav .nav-item a');
    var expandableSections = document.querySelectorAll('.expandable-section');
    var projectsSection = document.getElementById('projects');
    var projectsButton = document.querySelector('.btn-visit-github'); 
    var scrollToTopBtn = document.querySelector('.scroll-to-top');

    function handleScroll() {
        var scrollPosition = window.scrollY;
        var windowHeight = window.innerHeight;

        // Handle navbar background and brand size on scroll
        if (scrollPosition > 0) {
            navbar.classList.add('scrolled');
            navbarBrand.classList.remove('expanded');
            scrollToTopBtn.classList.add('visible');
        } else {
            navbar.classList.remove('scrolled');
            navbarBrand.classList.add('expanded');
            scrollToTopBtn.classList.remove('visible');
        }

        // Update active state of navbar links
        let currentActiveLink = null;
        navLinks.forEach(link => {
            var section = document.querySelector(link.getAttribute('href'));
            if (section) {
                var sectionTop = section.offsetTop - 100; // Adjust for navbar height
                var sectionBottom = sectionTop + section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    currentActiveLink = link;
                }
            }
        });

        navLinks.forEach(link => link.classList.remove('active'));
        if (currentActiveLink) {
            currentActiveLink.classList.add('active');
        }

        // Expandable sections logic
        expandableSections.forEach(section => {
            var sectionRect = section.getBoundingClientRect();
            var isInView = sectionRect.top < windowHeight * 0.5 && sectionRect.bottom > windowHeight * 0.5;

            section.classList.toggle('expanded', isInView);
            section.querySelectorAll('.portfolio-buttons a').forEach(button => button.classList.toggle('expanded', isInView));
            section.querySelectorAll('.social-button').forEach(button => button.classList.toggle('expanded', isInView));
            section.querySelector('.profile-pic')?.classList.toggle('profile-pic-border-changed', isInView);
        });

        // Projects section button expansion
        if (projectsSection && projectsButton) {
            var projectsRect = projectsSection.getBoundingClientRect();
            var projectsInView = projectsRect.top < windowHeight * 0.5 && projectsRect.bottom > windowHeight * 0.5;
            projectsButton.classList.toggle('expanded', projectsInView);
        }
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 56,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll to top button
    scrollToTopBtn.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Update copyright year
    var currentYear = new Date().getFullYear();
    document.getElementById('copyright-year').textContent = currentYear;
});
