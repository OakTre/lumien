import Swiper, {
  Navigation, Pagination
} from 'swiper/swiper-bundle';

Swiper.use([Navigation, Pagination]);

export default () => {
  const cartImgSliders = Array.from(document.querySelectorAll(".js-cart-img-slider"));

  cartImgSliders.forEach(slider=>{
    let sliderCart = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
      },
    });
  });
}
