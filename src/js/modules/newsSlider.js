import Swiper, {
  Navigation
} from 'swiper/swiper-bundle';

Swiper.use([Navigation]);

export default () => {
  let sliderNews = new Swiper(".news-slider", {
    slidesPerView: 3.4,
    spaceBetween: 20,
    navigation: {
      nextEl: '.js-news-btn-next',
      prevEl: '.js-news-btn-prev',
    },
    breakpoints: {
      280: {
        slidesPerView: 1.1,
        spaceBetween: 10
      },
      767: {
        slidesPerView: 2.4,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 3.4,
        spaceBetween: 20
      },
    }
  });
}
