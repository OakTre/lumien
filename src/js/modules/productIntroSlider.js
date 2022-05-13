import Swiper, {
  Navigation, Controller, Thumbs, Pagination
} from 'swiper/swiper-bundle';

Swiper.use([Navigation, Controller, Thumbs, Pagination]);

export default () => {
  const descktop =  window.matchMedia('(min-width: 992px)');

  if (descktop.matches) {
    let prductSliderThumb = new Swiper(".js-product-intro-thumb-slider", {
      slidesPerView: 3,
      spaceBetween: 20,
      freeMode: true,
      watchSlidesProgress: true,
    });

    let prductSlider = new Swiper(".js-product-intro-slider", {
      slidesPerView: 1,
      spaceBetween: 10,
      thumbs: {
        swiper: prductSliderThumb,
      },
    });
  } else {
    let prductSlider = new Swiper(".js-product-intro-slider", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: '.js-product-intro-pagination',
        type: 'bullets',
        clickable: true
      }
    });
  }
}
