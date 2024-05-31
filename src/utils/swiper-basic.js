import 'swiper/css';

import Swiper from 'swiper';

export function initSwiperBasic() {
  if (window.innerWidth <= 991) {
    $('[data-swiper]').each(function (index) {
      const swiper = new Swiper($(this).find('.swiper')[0], {
        slidesPerView: 1.1,
        direction: 'horizontal',
        speed: 500,
        keyboard: true,
        mousewheel: {
          forceToAxis: true,
        },
        slideToClickedSlide: false,
        spaceBetween: '16',
        loop: false,
      });
    });
  }
}
