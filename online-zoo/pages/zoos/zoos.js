// const slides = document.querySelectorAll('.carousel__item');

// slides.forEach(slide => slide.addEventListener('click', (event) => {

// }));

const plugs = document.querySelectorAll('.plug');

plugs.forEach(plug => plug.addEventListener('click', (event) => {
  const previewVideo = event.target.previousElementSibling;
  const previewVideoSrc = previewVideo.src;
  const mainVideo = document.querySelector('.broadcast__main-video iframe');
  const mainVideoSrc = mainVideo.src;
  console.log(mainVideo);
  mainVideo.src = previewVideoSrc;
  previewVideo.src = mainVideoSrc;
}));