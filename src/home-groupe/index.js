console.log('HOME groupe');

import 'swiper/css';

import Swiper from 'swiper';

function initSwiper() {
  $('[data-swiper-card]').each(function (index) {
    const swiper = new Swiper($(this).find('.swiper')[0], {
      slidesPerView: 1.1,
      direction: 'horizontal',
      speed: 500,
      keyboard: true,
      mousewheel: {
        forceToAxis: true,
      },
      slideToClickedSlide: false,
      spaceBetween: '8',
      loop: false,
    });
  });
}

initSwiper();
