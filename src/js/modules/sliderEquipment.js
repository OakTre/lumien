import Swiper, {
  Navigation
} from 'swiper/swiper-bundle';

Swiper.use([Navigation]);

export default () => {
  const sliders = Array.from(document.querySelectorAll(".js-slider-equipment"));

  sliders.forEach(slider => {
    const parent = slider.closest(".js-slider-equipment-parent");
    const slidesCount = Number(parent.dataset.countSliders) ? Number(parent.dataset.countSliders) : 3.1;

    let sliderCases = new Swiper(slider, {
      slidesPerView: 1.1,
      spaceBetween: 10,
      navigation: {
        nextEl:  slider.closest(".slider-equipment").querySelector('.js-equipment-btn-next'),
        prevEl: slider.closest(".slider-equipment").querySelector('.js-equipment-btn-prev'),
      },
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
          slidesPerView: slidesCount,
          spaceBetween: 60
        },
      }
    });
  });
}
