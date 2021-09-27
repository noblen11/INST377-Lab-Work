let slidesPosition= 0;
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;

document.
    getElementsById('carousel__button--next')
    .addEventListener("click", function(){
        moveToNextSlide();
    });

document.
    getElementsById('carousel__button--prev')
    .addEventListener("click", function(){
        moveToPrevSlide();
    });  
    
function updateSlidePosition(){
    for (let slide of slides){
        slide.classList.remove('carousel__item--visable');
        slide.classList.remove('carousel__item--hidden');
    }

    slides[slidePosition].classList.add('carousel__item--visable')
}


function moveToNextSlide(){
    if (slidePosition == totalSlides - 1){
        slidePosition = 0;
    }   else {
        slidePosition++;
    }
    updateSlidePosition();

}

function moveToPrevSlide(){
    if (slidePosition == 0){
        slidePosition = totalSlides - 1;
    }   else {
        slidePosition--;
    }
    updateSlidePosition();

}
     
    

