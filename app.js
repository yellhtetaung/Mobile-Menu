const navBtn = document.getElementById("navBtn");
const navMenu = document.querySelector(".navbar-nav");
const btnClose = document.getElementById("btnClose");
const navLinks = [...document.querySelectorAll("li a")];

navBtn.addEventListener("click", () => {
  navMenu.classList.add("show");
});

btnClose.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});
