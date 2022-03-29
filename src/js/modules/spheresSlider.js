import Swiper, {
  Navigation,
  Pagination,
  Controller,
  EffectFade,
  Thumbs,
  FreeMode
} from 'swiper/swiper-bundle';

Swiper.use([Navigation, Pagination, Controller, Thumbs, EffectFade, FreeMode]);

export default () => {
  let sliderThumb = new Swiper(".spheres__nav", {
    slidesPerView: 'auto',
    spaceBetween: 32,
    slidesPerGroup: 2,
  });

  let sliderSpheres = new Swiper(".spheres__slider", {
		effect: 'fade',
		fadeEffect: {
		  crossFade: true,
		},
    speed: 100,
    thumbs: {
      swiper: sliderThumb,
      slideThumbActiveClass: "swiper-slide-thumb-active",
    },
    navigation: {
      nextEl: '.js-spheres-btn-next',
      prevEl: '.js-spheres-btn-prev',
    },
  });

  // sliderSpheres.on('slideChange', function (swiper) {
  //   sliderThumb.slideTo(swiper.activeIndex);
  // });

  // sliderSpheres.controller.control = sliderThumb;
  // sliderThumb.controller.control = sliderSpheres;
};
