let isScrolling = false;

window.addEventListener('wheel', (event) => {
  const scrollContainer = document.querySelector('.projects-scroll-container');
  const content = document.querySelector('.projects-content');

  if (!isScrolling) {
    isScrolling = true;

    const currentScroll = scrollContainer.scrollLeft;
    const scrollAmount = event.deltaY;

    if (event.deltaY > 0) {
      // Scroll Down - Move Right
      content.style.transform = `translateX(-${currentScroll + 200}px)`; // Adjust 200px to the scroll speed
    } else {
      // Scroll Up - Move Left
      content.style.transform = `translateX(-${Math.max(currentScroll - 200, 0)}px)`; // Adjust 200px to the scroll speed
    }

    setTimeout(() => {
      isScrolling = false;
    }, 50);
  }
});

// Wait until the section is in view before enabling horizontal scrolling
const projectsSection = document.querySelector('#projects');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Section is in view, allow horizontal scrolling
      document.body.style.overflowX = 'hidden';
    } else {
      // Section is out of view, reset vertical scrolling
      document.body.style.overflowX = 'scroll';
    }
  });
}, { threshold: 0.5 });

observer.observe(projectsSection);
