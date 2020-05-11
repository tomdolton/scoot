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


// FAQs collapsible

const collapsible = document.querySelectorAll(".faq__item");

function showAnswer() {
  const question = this.childNodes[1];
  const answer = question.nextElementSibling;

  console.log(answer.scrollHeight);
  question.classList.toggle("faq__question--active");

  if (answer.style.maxHeight) {
    answer.style.maxHeight = null;
  } else {
    answer.style.maxHeight = answer.scrollHeight + "px";
  }
}

for (const coll of collapsible) {
  coll.addEventListener("click", showAnswer);
}
