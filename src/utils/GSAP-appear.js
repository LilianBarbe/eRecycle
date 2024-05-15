// import
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const makeContainersAppear = () => {
  gsap.utils;
  gsap.utils;
  gsap.utils
    .toArray('.u-container:not(.hero_contain, .cta_contain, .footer_contain, .header_contain)')
    .forEach((container) => {
      gsap.from(container, {
        opacity: 0,
        yPercent: 10,
        duration: 0.4,
        ease: 'power2.out',
        scrollTrigger: {
          markers: false,
          trigger: container,
          start: 'top 75%',
        },
      });
    });
};
