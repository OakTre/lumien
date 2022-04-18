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
  });
};
