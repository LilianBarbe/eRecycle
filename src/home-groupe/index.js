import { animCarousel } from '$utils/carousel.js';

document.addEventListener('DOMContentLoaded', function () {
  console.log('Home Groupe');
  initSwiper();
  animCarousel();
});

window.addEventListener('resize', initSwiper);
