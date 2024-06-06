console.log('Histoire');
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
let counter1 = { value: 0 };
let counter2 = { value: 0 };

const updateCounter1 = () => {
  document.querySelector('.conversion_numbers_item').innerText = `${Math.floor(counter1.value)}%`;
};

gsap.to(counter1, {
  value: 96,
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
