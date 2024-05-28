import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

console.log('RSE');

gsap.registerPlugin(ScrollTrigger);

let counter1 = { value: 0 };
let counter2 = { value: 0 };

const updateCounter1 = () => {
  document.querySelector('.conversion_numbers_num').innerText = `${Math.round(counter1.value)}`;
};

const updateCounter2 = () => {
  document.querySelector('.conversion_numbers_num.is-2').innerText =
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
  duration: 3, // Increased duration to finish after counter2
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
  duration: 2,
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
