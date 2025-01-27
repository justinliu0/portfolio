document.addEventListener("scroll", () => {
  const projectsContainer = document.querySelector(".projects-sticky");
  const scrollY = window.scrollY;

  // Add a class when scrolling for the effect
  if (scrollY > 100) {
    projectsContainer.classList.add("is-scrolling");
  } else {
    projectsContainer.classList.remove("is-scrolling");
  }
});
