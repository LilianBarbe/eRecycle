import 'swiper/css';

import Swiper from 'swiper';

export function initTestimonials() {
  $('[data-testimonials]').each(function (index) {
    const swiper = new Swiper($(this).find('.swiper')[0], {
      slidesPerView: 1.2,
      direction: 'horizontal',
      speed: 500,
      keyboard: true,
      mousewheel: {
        forceToAxis: true,
      },
      slideToClickedSlide: false,
      spaceBetween: '5%',
      loop: false,
      initialSlide: index === 0 ? 0 : $(this).find('.swiper-slide').length - 1,
    });
  });

  const swiper2 = new Swiper(document.querySelectorAll('[data-testimonials] .swiper')[1], {
    slidesPerView: 1.2,
    direction: 'horizontal',
    speed: 500,
    keyboard: true,
    mousewheel: {
      forceToAxis: true,
    },
    slideToClickedSlide: false,
    spaceBetween: '5%',
    loop: false,
    // initialSlide:
    //   document.querySelectorAll('[data-testimonials] .swiper')[1].querySelectorAll('.swiper-slide')
    //     .length - 1,
  });
}
