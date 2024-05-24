console.log('GLOBAL! 🌐');

// import
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import { openOneAccordeonAtOnce } from '$utils/accordeon.js';
import { makeContainersAppear } from '$utils/GSAP-appear.js';
import { putImagesIntoText } from '$utils/images-into-text.js';
import { initLenis } from '$utils/lenis.js';
import navOverlay, { hideOverlay, navMenuDropdowns, showOverlay } from '$utils/nav.js';
import { setupTransition } from '$utils/page-load.js';
import { initSwiperBasic } from '$utils/swiper-basic.js';
import { initTestimonials } from '$utils/testimonials.js';

const animationTitre = () => {
  const heroTitle = new SplitType('[data-line-animation], .header_layout .w-richtext h1', {
    types: 'lines',
  });

  // Sélectionner l'élément avec la classe tp-widget-wrapper
  var widgetWrapper = document.querySelector('.tp-widget-wrapper');

  // Vérifier si l'élément existe
  if (widgetWrapper) {
    // Appliquer text-align: left au style de l'élément
    widgetWrapper.style.textAlign = 'left';
  }

  // Ajouter une structure pour pouvoir cibler le texte à l'intérieur des lignes
  heroTitle.lines.forEach((line) => {
    // Ajouter un conteneur autour du texte
    const lineInner = document.createElement('div');
    lineInner.classList.add('line-inner');
    lineInner.innerHTML = line.innerHTML;
    line.innerHTML = '';
    line.appendChild(lineInner);
  });

  // Sélectionner le texte à l'intérieur des conteneurs pour l'animation (inclut les deux cibles)
  const lineInners = document.querySelectorAll('[data-line-animation] .line-inner, .line-inner');

  // Rendre les éléments visibles et animer
  gsap
    .timeline()
    .set(['[data-line-animation]', '.header_layout h1, .w-richtext'], { visibility: 'visible' }) // Rendre visible au début de l'animation
    .from(lineInners, {
      duration: 0.7,
      y: '120%',
      opacity: 0,
      stagger: 0.1,
      ease: 'power4.out',
    });
};

const imgZoomInner = () => {
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
};

document.addEventListener('DOMContentLoaded', function () {
  setupTransition(() => {
    initLenis();
    // imgZoomInner();
    initSwiperBasic();
    initTestimonials();
    makeContainersAppear();
    putImagesIntoText();
    openOneAccordeonAtOnce();
    animationTitre();
  });
});
