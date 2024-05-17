console.log('GLOBAL! 🌐');

gsap.fromTo(
  '.split_visual_wrap img',
  {
    opacity: 0,
    scale: 1.3, // Slightly larger than normal size for the initial zoom
  },
  {
    opacity: 1,
    scale: 1, // Slightly smaller than normal size for the zoom out effect
    scrollTrigger: {
      trigger: '.split_wrap',
      start: 'top 80%', // Adjust this as per your need
      once: true, // Ensure it plays only once
      toggleActions: 'play none none none',
      duration: 4,
    },
    duration: 1, // Adjust duration as needed
    ease: 'power1.out',
    onComplete: () => {
      // Settle to slightly larger than normal after the initial dezoom
      gsap.to('.split_wrap', {
        scale: 1, // Normal size after the effect
        duration: 2,
        ease: 'power1.out',
      });
    },
  }
);

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
