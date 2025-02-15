document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const body = document.body;

    function updateNavbar() {
        if (window.scrollY > 50) {
            navbar.classList.remove("transparent");
            navbar.classList.add("solid");
            body.classList.add("body-padding");
        } else {
            navbar.classList.remove("solid");
            navbar.classList.add("transparent");
            body.classList.remove("body-padding");
        }
    }

    window.addEventListener("scroll", updateNavbar);
    updateNavbar(); // Run once on page load
});
