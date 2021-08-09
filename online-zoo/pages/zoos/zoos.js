const plugs = document.querySelectorAll('.plug');
const cards = document.querySelectorAll('.sidebar .carousel__item');

plugs.forEach(plug => plug.addEventListener('click', (event) => {
  const previewVideo = event.target.previousElementSibling;
  const previewVideoSrc = previewVideo.src;
  const mainVideo = document.querySelector('.broadcast__main-video iframe');
  const mainVideoSrc = mainVideo.src;
  mainVideo.src = previewVideoSrc;
  previewVideo.src = mainVideoSrc;
}));


const dots = document.querySelectorAll('.switcher__dot');
let pressed = false;

dots.forEach(dot => dot.addEventListener('click', (event) => {
  const dotActive = document.querySelector('.switcher__dot_active');
  const track = document.querySelector('.preview-video-track');
  const slider = document.querySelector('.broadcast__preview-video');
  const slide = document.querySelector('.preview-video__item');
  const sliderWidth = slider.offsetWidth;
  const slideWidth = slide.offsetWidth;
  let offset = 0;

  dotActive.classList.remove('switcher__dot_active');
  event.target.classList.add('switcher__dot_active');  
  
  if (event.target === dots[0]) {
    track.style.transform = `translateX(0)`;    
  }
  if (event.target === dots[1]) {
    track.style.transform = `translateX(-${slideWidth * 3}px)`;      
  }  
  if (event.target === dots[1] && pressed === true) {
    track.style.transform = `translateX(-${slideWidth}px)`;
    pressed = false;    
  }
  if (event.target === dots[2]) {
    track.style.transform = `translateX(-${slideWidth * 4}px)`;
    pressed = true;    
  }
  
}));