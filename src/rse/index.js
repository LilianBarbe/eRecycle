import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

console.log('test');

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  '.recon_list img, .split_visual_wrap img',
  {
    opacity: 0,
    scale: 1, // Slightly larger than normal size for the initial zoom
  },
  {
    opacity: 1,
    scale: 1.1, // Slightly smaller than normal size for the zoom out effect
    scrollTrigger: {
      trigger: '.recon_list img',
      start: 'top 80%', // Adjust this as per your need
      once: true, // Ensure it plays only once
      toggleActions: 'play none none none',
      duration: 2,
    },
    duration: 1, // Adjust duration as needed
    ease: 'power1.out',
    onComplete: () => {
      // Settle to slightly larger than normal after the initial dezoom
      gsap.to('.recon_list img', {
        scale: 1, // Normal size after the effect
        duration: 2,
        ease: 'power1.out',
      });
    },
  }
);

let counter1 = { value: 0 };
let counter2 = { value: 0 };

const updateCounter1 = () => {
  document.querySelector('.conversion_numbers_item').innerText = `${Math.round(counter1.value)}%`;
};

const updateCounter2 = () => {
  document.querySelector('.conversion_numbers_item .is-2').innerText =
    `${Math.round(counter2.value)}`;
};

gsap.to(counter1, {
  value: 94,
  scrollTrigger: {
    trigger: '.conversion_card',
    start: 'top 80%',
    toggleActions: 'play none none none',
    once: true,
  },
  duration: 3,
  ease: 'power1.out',
  onUpdate: updateCounter1,
});

gsap.to(counter2, {
  value: 87,
  scrollTrigger: {
    trigger: '.conversion_card',
    start: 'top 80%',
    toggleActions: 'play none none none',
    once: true,
  },
  duration: 4,
  ease: 'power1.out',
  onUpdate: updateCounter2,
  onComplete: () => {
    // Special ending animation for the second counter
    gsap.to('#counter2', {
      scale: 1.2,
      duration: 0.2,
      ease: 'elastic.out(1, 0.3)',
      yoyo: true,
      repeat: 1,
    });
  },
});
