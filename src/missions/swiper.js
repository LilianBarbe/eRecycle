import 'swiper/css';
import 'swiper/css/navigation';

import Swiper from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';

export function initSwiper() {
  if (window.innerWidth > 1) {
    $('body').each(function (index) {
      const swiper = new Swiper($(this).find('.swiper')[0], {
        slidesPerView: 'auto',
        direction: 'horizontal',
        speed: 500,
        autoplay: {
          delay: 3000, // delay in milliseconds between each slide transition
        },

        keyboard: true,
        mousewheel: {
          forceToAxis: true,
        },
        slideToClickedSlide: false,
        spaceBetween: 20,
        loop: true,
        modules: [Navigation, Autoplay], // Add Autoplay module here
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        watchOverflow: true, // Ajouter cette option
        watchSlidesProgress: true, // Ajouter cette option
      });
    });
  }
}
