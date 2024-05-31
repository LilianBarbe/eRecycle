// histoire

console.log('Histoire');
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
let counter1 = { value: 0 };
let counter2 = { value: 0 };

const updateCounter1 = () => {
  document.querySelector('.conversion_numbers_item').innerText = `${counter1.value.toFixed(1)}%`;
};

gsap.to(counter1, {
  value: 9.6,
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
