import Swiper, {
  Navigation
} from 'swiper/swiper-bundle';

Swiper.use([Navigation]);

export default () => {
  const sliders = Array.from(document.querySelectorAll(".js-suitable-models-slider"));

  sliders.forEach(slider => {
    let slidersuitableModels = new Swiper(slider, {
      slidesPerView: 4,
      spaceBetween: 40,
      navigation: {
        nextEl: '.js-model-btn-next',
        prevEl: '.js-model-btn-prev',
      },
      breakpoints: {
        280: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        767: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }
    });
  });

}
