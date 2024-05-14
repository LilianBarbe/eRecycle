// HOME

// import
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// construct
//// GSAP ANIM
const anim = gsap.to('.carousel_list', {
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

//// animation titre
const animationTitre = window.addEventListener('DOMContentLoaded', (event) => {
  setTimeout(() => {
    $('[data-line-animation]').each(function (index) {
      gsap.set($(this), { autoAlpha: 1 });
      let textEl = $(this);
      let textContent = $(this).text();
      let tl;

      function splitText() {
        new SplitType(textEl, { types: 'lines', tagName: 'span' });
        textEl.find('.line').each(function (index) {
          let lineContent = $(this).html();
          $(this).html('');
          $(this).append(`<span class="line-inner" style="display: block;">${lineContent}</span>`);
        });
        tl = gsap.timeline({
          scrollTrigger: {
            trigger: textEl,
            start: 'top bottom',
            end: 'bottom bottom',
            toggleActions: 'none play none reset',
          },
        });
        tl.fromTo(
          textEl.find('.line-inner'),
          { yPercent: 105 },
          { yPercent: 0, duration: 0.5, stagger: { amount: 0.3, ease: 'power2.out' } }
        );
      }
      splitText();

      let windowWidth = window.innerWidth;
      window.addEventListener('resize', function () {
        if (windowWidth !== window.innerWidth) {
          windowWidth = window.innerWidth;
          tl.kill();
          textEl.text(textContent);
          splitText();
        }
      });
    });
  }, 300);
});

// functions
document.addEventListener('DOMContentLoaded', function () {
  console.log('Home 🏡');
  anim;
  animationTitre;
});
