// import
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

//// GSAP ANIM
export const animCarousel = () => {
  gsap.to('.carousel_list', {
    x: '-70%',
    ease: 'none',
    scrollTrigger: {
      markers: false,
      trigger: '.carousel_wrap',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.5,
    },
  });
};
