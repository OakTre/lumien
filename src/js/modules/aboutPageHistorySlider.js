import Swiper, {
  Navigation, Controller, Thumbs, Pagination, EffectFade
} from 'swiper/swiper-bundle';

Swiper.use([Navigation, Controller, Thumbs, Pagination, EffectFade]);

export default () => {
  let aboutSilderThumb = new Swiper(".page-about-history__text-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: true,
    allowTouchMove: false,
    watchSlidesProgress: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
  });

  let aboutSilder = new Swiper(".page-about-history__date-slider", {
    slidesPerView: 'auto',
    spaceBetween: 25,
    navigation: {
      nextEl: '.js-about-btn-next',
      prevEl: '.js-about-btn-prev',
    },
    breakpoints: {
      280: {
        spaceBetween: 15
      },
      1025: {
        spaceBetween: 25,
      },
    },
    thumbs: {
      swiper: aboutSilderThumb,
    },
  });
}
