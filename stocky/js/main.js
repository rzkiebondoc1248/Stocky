let menuBtn = document.querySelector(".hamburger");
let navMenu = document.querySelector("nav");

menuBtn.addEventListener("click", function (event) {
  event.preventDefault();
  navMenu.classList.toggle("show-mob-menu");
  let expanded = this.getAttribute("aria-expanded") === "true" || false;
  this.setAttribute("aria-expanded", !expanded);
  let menu = this.nextElementSibling;
});
