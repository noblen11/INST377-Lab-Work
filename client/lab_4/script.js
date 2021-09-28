let slidesPosition = 0;
const slides = document.getElementsByClassName("carousel_item");
const totalSlides = slides.length;

const next = document.querySelector("#carousel_button--next");
next.addEventListener("click", () => {
  moveToNextSlide();
  console.log("nextButton.click");
});

const prev = document.querySelector("#carousel_button--prev");
prev.addEventListener("click", () => {
  moveToPrevSlide();
  console.log("prevButton.click");
});

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove("carousel_item--visable");
    slide.classList.remove("carousel_item--hidden");
  }

  slides[slidesPosition].classList.add("carousel_item--visable");
}

function moveToNextSlide() {
  if (slidesPosition == totalSlides - 1) {
    slidesPosition = 0;
  } else {
    slidesPosition++;
  }
  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidesPosition == 0) {
    slidesPosition = totalSlides - 1;
  } else {
    slidesPosition--;
  }
  updateSlidePosition();
}
