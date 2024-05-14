// navOverlay.js

import { gsap } from 'gsap';

import { getLenis } from '$utils/lenis.js';

const lenis = getLenis();

// const
export const navMenuDropdowns = document.querySelectorAll('.nav_menu_dropdown');
export const navOverlay = document.querySelector('.nav_overlay');

// Fonction pour afficher l'overlay
export function showOverlay() {
  if (!navOverlay.classList.contains('active')) {
    const lenis = getLenis();
    lenis.stop();
    navOverlay.style.display = 'block';
    gsap.fromTo(
      navOverlay,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.3,
        onComplete: () => {
          navOverlay.classList.add('active');
        },
      }
    );
  }
}

// Fonction pour masquer l'overlay
export function hideOverlay() {
  if (navOverlay.classList.contains('active')) {
    const lenis = getLenis();
    lenis.start();
    gsap.to(navOverlay, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        navOverlay.style.display = 'none';
        navOverlay.classList.remove('active');
      },
    });
  }
}

if (window.innerWidth >= 991) {
  // Ajouter un écouteur d'événement de clic à chaque élément .nav_menu_dropdown
  navMenuDropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', (event) => {
      event.stopPropagation();
      showOverlay();
    });
  });

  // Ajouter un écouteur d'événement de clic au document
  document.addEventListener('click', (event) => {
    const { target } = event;

    // Vérifier si l'élément cliqué n'est pas un .nav_menu_dropdown
    if (!target.closest('.nav_menu_dropdown')) {
      hideOverlay();
    }
  });
}

export default {
  showOverlay,
  hideOverlay,
};