const menuToggle = document.querySelector(".menu-toggle");
const navWrapper = document.querySelector(".nav-links-wrapper");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active"); // animates the bars
  navWrapper.classList.toggle("active"); // shows/hides the menu
});
