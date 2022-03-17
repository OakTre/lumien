import Swiper from 'swiper/swiper-bundle';

export default () => {
  let sliderNews = new Swiper(".advantages__slider", {
    slidesPerView: 3.4,
    spaceBetween: 168,
    breakpoints: {
      320: {
        slidesPerView: 1.1,
        spaceBetween: 20
      },
      767: {
        slidesPerView: 2.4,
        spaceBetween: 50
      },
      1200: {
        slidesPerView: 3.4,
        spaceBetween: 168
      },
    }
  });
}
