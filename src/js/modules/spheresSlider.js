import Swiper, {
  Navigation,
  Pagination,
  Controller,
  EffectFade,
  Thumbs
} from 'swiper/swiper-bundle';

Swiper.use([Navigation, Pagination, Controller, Thumbs, EffectFade]);

export default () => {
  let sliderThumb = new Swiper(".spheres__nav", {
    slidesPerView: 'auto',
    spaceBetween: 32,
    simulateTouch: true,
    navigation: {
      nextEl: '.js-spheres-btn-next',
      prevEl: '.js-spheres-btn-prev',
    },
  });

  let sliderSpheres = new Swiper(".spheres__slider", {
		effect: 'fade',
		fadeEffect: {
		  crossFade: true,
		},
    speed: 1000,
    thumbs: {
      swiper: sliderThumb,
      slideThumbActiveClass: "swiper-slide-thumb-active",
    }
  });

  // sliderSpheres.controller.control = sliderThumb;
  // sliderThumb.controller.control = sliderSpheres;
};
