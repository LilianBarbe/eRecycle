// page-load.js
import { gsap } from 'gsap';

import { getLenis } from '$utils/lenis.js';

export function setupTransition(onCompleteCb) {
  // page load

  let tl = gsap.timeline({ defaults: { duration: 0.5 }, onComplete: onCompleteCb });
  tl.to('.transition_wrap', { yPercent: -100, ease: 'power2.out' });
  tl.set('.transition_wrap', { display: 'none' });

  // link click
  document.querySelectorAll('a:not(.excluded-class)').forEach((link) => {
    link.addEventListener('click', function (e) {
      let currentUrl = this.getAttribute('href');
      if (
        this.hostname === window.location.host &&
        !currentUrl.includes('#') &&
        this.getAttribute('target') !== '_blank'
      ) {
        e.preventDefault();
        const lenis = getLenis();
        lenis.stop();
        let tl = gsap.timeline({
          onComplete: () => (window.location.href = currentUrl),
        });
        tl.set('.transition_wrap', { display: 'flex' });
        tl.fromTo('.transition_wrap', { yPercent: 100 }, { yPercent: 0 });
      }
    });
  });
}

// On Back Button Tap
window.onpageshow = function (event) {
  if (event.persisted) window.location.reload();
};
