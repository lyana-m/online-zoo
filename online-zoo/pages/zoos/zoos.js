// const slides = document.querySelectorAll('.carousel__item');

// slides.forEach(slide => slide.addEventListener('click', (event) => {

// }));

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

// cards.forEach(card => card.addEventListener('click', (event) => {
    
//     const cardId = event.currentTarget.getAttribute('id');
//     console.log(cardId);
//     const link = document.createElement('a');
//     link.href = `../${cardId}/${cardId}.html`;
//     link.click();
//     link.remove();
    
// }));

// const ifames = document.querySelectorAll('iframe');
// console.log(ifames);


// document.documentElement.onload = () => {
//   cards.forEach(card => card.addEventListener('click', (event) => {
//     const cardId = event.currentTarget.getAttribute('id');
//     console.log(cardId);
//     const link = document.createElement('a');
//     link.href = `../${cardId}/${cardId}.html`;
//     link.click();
//     link.remove();
//   }));
// };

// document.addEventListener('load', () => {
//   cards.forEach(card => card.addEventListener('click', (event) => {
//     const cardId = event.currentTarget.getAttribute('id');
//     console.log(cardId);
//     const link = document.createElement('a');
//     link.href = `../${cardId}/${cardId}.html`;
//     link.click();
//     link.remove();
//   }));
// });