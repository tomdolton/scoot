// Mobile nav toggle

const hamburger = document.querySelector(".nav__hamburger");
const mobileNav = document.querySelector(".nav__links--mobile");
const modal = document.querySelector(".modal");
const mobileBtn = document.querySelector(".nav__btn--mobile");

function toggleNav() {
  mobileNav.classList.toggle("nav__links--active");
  hamburger.classList.toggle("nav__hamburger--active");
  modal.classList.toggle("modal--active");

}

hamburger.addEventListener("click", toggleNav);
modal.addEventListener("click", toggleNav);
mobileBtn.addEventListener("click", toggleNav);
