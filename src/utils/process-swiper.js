import 'swiper/css';

import Swiper from 'swiper';

export function initSwipers() {
  if ($(window).width() >= 768) {
    $('[data-process]').each(function (index) {
      const $process = $(this);

      $process.find('.swiper').eq(0).find('.swiper-slide').eq(0).addClass('is-active');
      const swiper1 = new Swiper($process.find('.swiper')[0], {
        allowTouchMove: false,
        allowSlideNext: false,
        allowSlidePrev: false,
      });

      const swiper2 = new Swiper($process.find('.swiper')[1], {
        slidesPerView: 1,
        direction: 'horizontal',
        speed: 500,
        keyboard: true,
        mousewheel: {
          forceToAxis: true,
        },
        slideToClickedSlide: false,
        spaceBetween: '5%',
        loop: false,
        on: {
          slideChange: function () {
            $process.find('.swiper').eq(0).find('.swiper-slide').removeClass('is-active');
            $process
              .find('.swiper')
              .eq(0)
              .find('.swiper-slide')
              .eq(this.activeIndex)
              .addClass('is-active');
          },
        },
      });

      // Add click event to the slides of swiper1 to update swiper2
      $process
        .find('.swiper')
        .eq(0)
        .find('.swiper-slide')
        .each(function (slideIndex) {
          $(this).on('click', function () {
            swiper2.slideTo(slideIndex);
          });
        });
    });
  }
}
