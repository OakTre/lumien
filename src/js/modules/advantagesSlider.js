import Swiper from 'swiper/swiper-bundle';

export default () => {
  let sliderNews = new Swiper(".advantages__slider", {
    slidesPerView: 3.4,
    spaceBetween: 168,
    breakpoints: {
      280: {
        slidesPerView: 2.4,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 3.4,
        spaceBetween: 168
      },
    }
  });
}
