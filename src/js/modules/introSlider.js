import Swiper, {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay
} from 'swiper/swiper-bundle';

Swiper.use([Navigation, Pagination, EffectFade, Autoplay]);

export default () => {
  let menu = [];
  const slides = Array.from(document.querySelectorAll(".intro-content__heading"));

  slides.forEach((slide)=>{
    let menuName = slide.dataset.name;
    menu.push(menuName);
  });

  let sliderIntro = new Swiper(".intro-content-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    effect: 'fade',
		fadeEffect: {
		  crossFade: true,
		},
    pagination: {
      el: '.intro-slider-nav',
			// clickable: true,
      renderBullet: function (index, className) {
        return '<span class="intro-slider-nav__item ' + className + '">' + (menu[index]) + '</span>';
      },
    },
  });
};
