import Swiper, {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
  Thumbs,
  Controller
} from 'swiper/swiper-bundle';

Swiper.use([Navigation, Pagination, EffectFade, Autoplay, Thumbs, Controller]);

export default () => {
  let sliderIntroNav = new Swiper(".intro-slider-nav", {
    slidesPerView: 1,
    direction: 'vertical',
    spaceBetween: 30,
    watchSlidesProgress: true,
  });

  let sliderIntro = new Swiper(".intro-content-slider", {
    slidesPerView: 'auto',
    spaceBetween: 0,
    effect: 'fade',
		fadeEffect: {
		  crossFade: true,
		},
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  sliderIntroNav.controller.control = sliderIntro;
  sliderIntro.controller.control = sliderIntroNav;

  // setTimeout(() => {
  //   document.querySelector(".intro-slider-nav .swiper-slide-active").classList.add("swiper-paused");
  //   sliderIntro.autoplay.stop();
  // }, 3000);

  // document.addEventListener("visibilitychange", function() {
	// 	if (document.visibilityState === 'visible') {
  //     document.querySelector(".intro-slider-nav .swiper-slide-active").classList.remove("swiper-paused");
  //     sliderIntro.autoplay.start();
	// 	} else {
  //     document.querySelector(".intro-slider-nav .swiper-slide-active").classList.add("swiper-paused");
  //     sliderIntro.autoplay.stop();
	// 	}
	// });
};
