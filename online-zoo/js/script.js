// first screen slider

const firstSlider = document.querySelector('.first-screen .slider');
const firstSliderTrack = document.querySelector('.first-screen .slider__container');
const firstSliderSlides = document.querySelectorAll('.first-screen .slider__item');
const firstSliderInput = document.querySelector('.first-screen-range .range__input');
const firstSliderInputValue = document.querySelector('.first-screen-range .range__value');

function firstSliderMove(event) {
  const activeSlide = document.querySelector('.first-screen .slider__item_active');
  const activeSlideIndex = Array.from(firstSliderSlides).indexOf(activeSlide);  
  const currentSlide = event.currentTarget;
  const currentSlideIndex = Array.from(firstSliderSlides).indexOf(currentSlide);
  const currentSlideWidth = currentSlide.offsetWidth;  
  
  activeSlide.classList.remove('slider__item_active');
  currentSlide.classList.add('slider__item_active');  

  if (currentSlideIndex > activeSlideIndex) {  
    firstSliderTrack.style.transform = `translateX(-${currentSlideWidth * (currentSlideIndex - 1)}px)`;    
  }
  if (currentSlideIndex < activeSlideIndex) {
    firstSliderTrack.style.transform = `translateX(${-currentSlideWidth * (currentSlideIndex - 1)}px)`;    
  }
  firstSliderInput.value = currentSlideIndex + 1;
  firstSliderInputValue.value = `0${currentSlideIndex + 1}/`;
}

firstSliderSlides.forEach(slide => slide.addEventListener('click', firstSliderMove));

firstSliderInput.addEventListener('input', () => {
  firstSliderInputValue.value = `0${firstSliderInput.value}/`;
  firstSliderSlides[firstSliderInput.value - 1].click();
});



// pets in zoo slider 

const slider = document.querySelector('.pets-in-zoo-slider');
const slides = document.querySelectorAll('.pets-in-zoo-slider__item');
const track = document.querySelector('.pets-in-zoo-slider__track');
const prevBtn = document.querySelector('.pets-in-zoo .left-arrow');
const nextBtn = document.querySelector('.pets-in-zoo .right-arrow');
const petsInput = document.querySelector('.pets-in-zoo-range .range__input');
const petsInputValue = document.querySelector('.pets-in-zoo-range .range__value');
const slidesNumber = slides.length;
const slidesToShow = 4;
const slidesToScroll = 1;
let count = 0;
let sliderWidth;

function init() {
  sliderWidth = slider.offsetWidth;
  track.style.width = sliderWidth * slidesNumber / slidesToShow + 160 + 'px';
  slides.forEach(slide => {
    slide.style.width = (sliderWidth - 80) / slidesToShow + 'px';
  });
}

init();
window.addEventListener('resize', init);

function moveRight() {
  const activeSlide = document.querySelector('.pets-in-zoo-slider__item_active');
  activeSlide.classList.remove('pets-in-zoo-slider__item_active');
  if (count < 8) {
    slides[count].classList.add('pets-in-zoo-slider__item_active');
  } else {
    count = 0;
    track.style.transform = `translateX(0)`;
    slides[count].classList.add('pets-in-zoo-slider__item_active');
  }
  if (count > 3 && count < 8) {
    track.style.transform = `translateX(-${sliderWidth / 4 * (count - 3)}px)`;
  }
}

function moveLeft() {
  const activeSlide = document.querySelector('.pets-in-zoo-slider__item_active');
  activeSlide.classList.remove('pets-in-zoo-slider__item_active');
  if (count >= 0) {
    slides[count].classList.add('pets-in-zoo-slider__item_active');
  } else {
    count = 7;
    track.style.transform = `translateX(-${sliderWidth / 4 * (count - 3)}px)`;
    slides[count].classList.add('pets-in-zoo-slider__item_active');
  }
  if (count < 4) {
    track.style.transform = `translateX(-${sliderWidth / 4 * (count)}px)`;
  }
}

nextBtn.addEventListener('click', () => {
  count++;
  moveRight();
  petsInputChange();
});

prevBtn.addEventListener('click', () => {
  count--;
  moveLeft();
  petsInputChange();
});

function petsInputChange() {
  petsInputValue.value = `0${count + 1}/`;
  petsInput.value = count + 1;
}

petsInput.addEventListener('input', () => {
  petsInputValue.value = `0${petsInput.value}/`;
  if (Number(petsInput.value) > count) {
    count++;
    moveRight();
  } else {
    count--;
    moveLeft();
  }
});