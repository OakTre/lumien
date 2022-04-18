import Swiper, {
  Navigation
} from 'swiper/swiper-bundle';

Swiper.use([Navigation]);

export default () => {
  let sliderCases = new Swiper(".js-slider-equipment", {
    slidesPerView: 1.1,
    spaceBetween: 10,
    breakpoints: {
      320: {
        slidesPerView: 1.1,
        spaceBetween: 10
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 3.1,
        spaceBetween: 60
      },
    }
  });
}
