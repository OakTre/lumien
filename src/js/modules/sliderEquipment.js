import Swiper, {
  Navigation
} from 'swiper/swiper-bundle';

Swiper.use([Navigation]);

export default () => {
  let sliderCases = new Swiper(".js-slider-equipment", {
    slidesPerView: 1.1,
    spaceBetween: 10,
    breakpoints: {
      280: {
        slidesPerView: 1.3,
        spaceBetween: 30
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 3.1,
        spaceBetween: 60
      },
    }
  });
}
