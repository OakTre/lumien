import Swiper, {
  Navigation,
} from 'swiper/swiper-bundle';

Swiper.use([Navigation]);

export default () => {
  let sliderSpheres = new Swiper(".detail-slider__slider", {
    slidesPerView: 'auto',
    spaceBetween: 20,
    centeredSlides: true,
    navigation: {
      nextEl: '.js-detail-btn-next',
      prevEl: '.js-detail-btn-prev',
    },
    breakpoints: {
      280: {
        slidesPerView: 1.3,
        spaceBetween: 10,
        centeredSlides: false,
      },
      767: {
        slidesPerView: 'auto',
        spaceBetween: 20,
        centeredSlides: true,
      },
    }
  });
};
