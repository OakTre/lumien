import Swiper, {
  Navigation
} from 'swiper/swiper-bundle';

Swiper.use([Navigation]);

export default () => {
  let sliderCases = new Swiper(".js-cases-slider", {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: '.js-cases-btn-next',
      prevEl: '.js-cases-btn-prev',
    },
    breakpoints: {
      280: {
        slidesPerView: 1.1,
        spaceBetween: 10
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      },
    }
  });
}
