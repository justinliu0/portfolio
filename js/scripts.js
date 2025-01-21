document.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY; // Get the current vertical scroll position
    const projectsSection = document.querySelector("#projects"); // Select the projects section
    const container = document.querySelector(".projects-content"); // Select the horizontal scrolling container

    const sectionTop = projectsSection.offsetTop; // Get the vertical offset of the section
    const sectionHeight = projectsSection.offsetHeight; // Get the section height

    // Check if the user is within the projects section
    if (scrollPosition >= sectionTop && scrollPosition <= sectionTop + sectionHeight) {
        const scrollOffset = scrollPosition - sectionTop; // Calculate how far into the section the user has scrolled
        const maxScroll = container.scrollWidth - projectsSection.clientWidth; // Max horizontal scroll distance
        const horizontalScroll = (scrollOffset / sectionHeight) * maxScroll; // Map vertical scroll to horizontal scroll

        container.style.transform = `translateX(-${horizontalScroll}px)`; // Apply horizontal scroll

        // Fix the projects section in place when scrolling into it
        projectsSection.classList.add("fixed");
    } else {
        // Remove the fixed class when scrolling past the section
        projectsSection.classList.remove("fixed");
    }
});
