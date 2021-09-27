let slidesPosition = 0;
const slides = document.getElementsByClassName("carousel_item");
const totalSlides = slides.length;

const next = document.querySelector(".next");
next.addEventListener("click", () => {
  moveToNextSlide();
  console.log("nextButton.click");
});

const prev = document.querySelector(".prev");
prev.addEventListener("click", () => {
  moveToPrevSlide();
  console.log("prevButton.click");
});

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove("carousel_item--visable");
    slide.classList.remove("carousel_item--hidden");
  }

  slides[slidePosition].classList.add("carousel_item--visable");
}

function moveToNextSlide() {
  if (slidePosition == totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition == 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  updateSlidePosition();
}
