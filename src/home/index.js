// HOME

// import
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { animCarousel } from '$utils/carousel.js';

// functions
document.addEventListener('DOMContentLoaded', function () {
  console.log('Home 🏡');
  animCarousel();
});
