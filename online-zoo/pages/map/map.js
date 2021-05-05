const slider = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel__item');
const slidesCount = slides.length;
const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.left-arrow-map');
const nextBtn = document.querySelector('.right-arrow-map');
const input = document.querySelector('.map-block .range__input');
const inputValue = document.querySelector('.map-block .range__value');
const sliderWidth = slider.offsetWidth;
const slideWidth = document.querySelector('.carousel__item').offsetWidth;
let lastSlideIndex;
let count = 2;
let offset = 0;

function lastSlideFind() {
  lastSlideIndex = Math.floor(sliderWidth / slideWidth) - 1;
}
lastSlideFind();
window.addEventListener('resize', lastSlideFind);


function move(direction) {
 
  const activeSlide = document.querySelector('.carousel__item_active');
  const activeSlideIndex = Array.from(slides).indexOf(activeSlide);
  const nextSlide = slides[activeSlideIndex + 1];
  const nextSlideIndex = Array.from(slides).indexOf(nextSlide);
  const prevSlide = slides[activeSlideIndex - 1];
  const prevSlideIndex = Array.from(slides).indexOf(prevSlide);
  nextBtn.style.pointerEvents = 'none';

  if (direction === 'right') {
    activeSlide.classList.remove('carousel__item_active');
    if (count <= slidesCount - 1) {
      count++;      
      nextSlide.classList.add('carousel__item_active');
      // TODO: доработать условие для translate
      if (nextSlideIndex > lastSlideIndex) {
        track.style.transform = `translateX(-${slideWidth + slideWidth * (activeSlideIndex - lastSlideIndex)}px)`;
        offset++;
      }
    } else {
      count = 1;
      slides[0].classList.add('carousel__item_active');
      track.style.transform = `translateX(0)`;
      offset = 0;
    }
  }
  if (direction === 'left') {
    activeSlide.classList.remove('carousel__item_active');
    if (count > 1) {
      count--;
      prevSlide.classList.add('carousel__item_active');
      if (count === offset) {
        track.style.transform = `translateX(${slideWidth + slideWidth * (0 - count)}px)`;
        offset--;
      }
    } else {
      count = slidesCount;
      slides[slidesCount - 1].classList.add('carousel__item_active');
      offset = (slidesCount - 1) - lastSlideIndex;
      track.style.transform = `translateX(${-slideWidth * offset}px)`;
    }
  }

  inputValue.value = `0${count}/`;
  input.value = count;
  makePinActive();
  setTimeout(() => {
    nextBtn.style.pointerEvents = 'auto';
  }, 400);
}

nextBtn.addEventListener('click', () => move('right'));
prevBtn.addEventListener('click', () => move('left'));

input.addEventListener('input', () => {
  const activeSlide = document.querySelector('.carousel__item_active');
  const activeSlideIndex = Array.from(slides).indexOf(activeSlide);
  const nextSlide = slides[activeSlideIndex + 1];
  const nextSlideIndex = Array.from(slides).indexOf(nextSlide);
  const prevSlide = slides[activeSlideIndex - 1];
  const oldCount = count;

  count = input.value;
  activeSlide.classList.remove('carousel__item_active');
  slides[count - 1].classList.add('carousel__item_active');
  inputValue.value = `0${count}/`;

  if (input.value > oldCount && count > lastSlideIndex) {    
    offset = count - lastSlideIndex;
    track.style.transform = `translateX(-${slideWidth + slideWidth * (count - (lastSlideIndex + 2))}px)`;
  }
  if (input.value < oldCount && count <= offset) {
    track.style.transform = `translateX(${slideWidth + slideWidth * (0 - count)}px)`;
  }
  makePinActive();
});

function makeSlideActive(event) {
  const activeSlide = document.querySelector('.carousel__item_active');
  activeSlide.classList.remove('carousel__item_active');
  event.currentTarget.classList.add('carousel__item_active');
  count = Array.from(slides).indexOf(event.currentTarget) + 1;
  inputValue.value = `0${count}/`;
  input.value = count;
  makePinActive();
}

slides.forEach(slide => slide.addEventListener('click', makeSlideActive));

function makePinActive() {
  const activePin = document.querySelector('.map__pin_active');

  if (activePin) {
    activePin.classList.remove('map__pin_active');
  }
  if (count < 5) {
    const activeSlideId = slides[count - 1].getAttribute('id');
    const targetPin = document.getElementById(`${activeSlideId}-pin`);
    targetPin.classList.add('map__pin_active');
  }
  setBtnLink();
}

const pins = document.querySelectorAll('.map__pin');

pins.forEach(pin => pin.addEventListener('click', (event) => {
  const targetSlideId = event.currentTarget.getAttribute('id').replace('-pin', '');  
  const targetSlide = document.getElementById(`${targetSlideId}`);
  targetSlide.click();
}));

function setBtnLink() {
  const btn = document.querySelector('.watch-btn-map');
  const activePin = document.querySelector('.map__pin_active');
  if (activePin) {
    const activePinId = activePin.getAttribute('id').replace('-pin', '');
    btn.setAttribute('href', `../zoos/${activePinId}/${activePinId}.html`);
  }
}