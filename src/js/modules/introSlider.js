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
  const imgs = Array.from(document.querySelectorAll(".intro-content__img"));
  const layers = Array.from(document.querySelectorAll(".intro__layer-slide"));

  let sliderIntroNav = new Swiper(".intro-slider-nav", {
    slidesPerView: 1,
    direction: 'vertical',
    allowTouchMove: false,
    spaceBetween: 30,
    watchSlidesProgress: true,
  });

  let sliderIntro = new Swiper(".intro-content-slider", {
    slidesPerView: 'auto',
    spaceBetween: 0,
    allowTouchMove: false,
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

  sliderIntro.on('slideChange', function (swiper) {
    imgs.forEach(img=>{img.classList.remove("mod-show")});
    imgs[swiper.activeIndex].classList.add("mod-show");

    layers.forEach(layer=>{layer.classList.remove("mod-show")});
    layers[swiper.activeIndex].classList.add("mod-show");
  });

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
