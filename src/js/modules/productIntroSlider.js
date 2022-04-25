import Swiper, {
  Navigation, Controller, Thumbs
} from 'swiper/swiper-bundle';

Swiper.use([Navigation, Controller, Thumbs]);

export default () => {
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
    }
  });
}
