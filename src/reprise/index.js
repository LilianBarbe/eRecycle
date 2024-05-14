import { initSwipers } from '$utils/process-swiper.js';

// Appel initial de la fonction
initSwipers();

// Ré-exécution de la fonction lors du redimensionnement de la fenêtre
$(window).on('resize', function () {
  initSwipers();
});
