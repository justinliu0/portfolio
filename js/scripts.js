const projectsContainer = document.querySelector(".projects-scroll-container");
const projectsContent = document.querySelector(".projects-content");
let scrollListenerActive = false;

// Hover logic for enabling/disabling scroll-based movement
projectsContainer.addEventListener("mouseover", () => {
  if (!scrollListenerActive) {
    scrollListenerActive = true;
    window.addEventListener("scroll", handleScroll);
  }
});

projectsContainer.addEventListener("mouseleave", () => {
  if (scrollListenerActive) {
    scrollListenerActive = false;
    window.removeEventListener("scroll", handleScroll);
  }
});

// Scroll handler to move project items horizontally
function handleScroll() {
  const scrollAmount = window.scrollY; // Track vertical scroll
  const speed = 0.5; // Adjust horizontal scroll speed

  // Move project content horizontally based on scroll
  projectsContent.style.transform = `translateX(${-scrollAmount * speed}px)`;
}
