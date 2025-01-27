let isScrolling = false;
let horizontalScrollEnabled = false;  // Flag to track horizontal scroll state

window.addEventListener('wheel', (event) => {
  const scrollContainer = document.querySelector('.projects-scroll-container');
  const content = document.querySelector('.projects-content');
  
  // Pause vertical scroll if horizontal scroll is enabled
  if (horizontalScrollEnabled) {
    event.preventDefault();
    const currentScroll = scrollContainer.scrollLeft;
    const scrollAmount = event.deltaY;

    if (scrollAmount > 0) {
      // Scroll Down - Move Right
      content.style.transform = `translateX(-${currentScroll + 200}px)`;  // Adjust 200px to the scroll speed
    } else {
      // Scroll Up - Move Left
      content.style.transform = `translateX(-${Math.max(currentScroll - 200, 0)}px)`;  // Adjust 200px to the scroll speed
    }
    return;
  }

  // If we're not scrolling horizontally, allow vertical scrolling
  if (!isScrolling) {
    isScrolling = true;

    // Allow vertical scrolling after we are at the end of horizontal scrolling
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
      // Section is in view, enable horizontal scrolling
      horizontalScrollEnabled = true;
      document.body.style.overflowX = 'hidden';  // Disable vertical scrolling during horizontal scroll
    } else {
      // Section is out of view, reset vertical scrolling
      horizontalScrollEnabled = false;
      document.body.style.overflowX = 'scroll';  // Re-enable vertical scrolling
    }
  });
}, { threshold: 0.5 });

observer.observe(projectsSection);
