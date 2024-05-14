console.log('GLOBAL 🌐');

// import
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import { openOneAccordeonAtOnce } from '$utils/accordeon.js';
import { makeContainersAppear } from '$utils/GSAP-appear.js';
import { putImagesIntoText } from '$utils/images-into-text.js';
import { initLenis } from '$utils/lenis.js';
import { setupTransition } from '$utils/page-load.js';
import { initSwiperBasic } from '$utils/swiper-basic.js';
import { initTestimonials } from '$utils/testimonials.js';

import navOverlay, { hideOverlay, navMenuDropdowns, showOverlay } from './nav.js';
setupTransition();
document.addEventListener('DOMContentLoaded', function () {
  initLenis();
  initSwiperBasic();
  initTestimonials();
  makeContainersAppear();
  putImagesIntoText();
  openOneAccordeonAtOnce();
});
