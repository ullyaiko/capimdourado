// I will be creating a different pen with touch support but right // now I have no time for it due to school

const slider = document.querySelector(".items-delivery-img");
const slides = document.querySelectorAll(".item-delivery-img");
const button = document.querySelectorAll(".button-items");

let current = 0;
let prev = 4;
let next = 1;

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => (i == 0 ? gotoPrev() : gotoNext()));
}

const gotoPrev = () =>
  current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

const gotoNext = () => (current < 4 ? gotoNum(current + 1) : gotoNum(0));

const gotoNum = (number) => {
  current = number;
  prev = current - 1;
  next = current + 1;

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active-delivery-img");
    slides[i].classList.remove("prev-delivery-img");
    slides[i].classList.remove("next-delivery-img");
  }

  if (next == 5) {
    next = 0;
  }

  if (prev == -1) {
    prev = 4;
  }

  slides[current].classList.add("active-delivery-img");
  slides[prev].classList.add("prev-delivery-img");
  slides[next].classList.add("next-delivery-img");
};
