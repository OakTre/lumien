import Swiper, {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
  Thumbs,
  Controller
} from 'swiper/swiper-bundle';

Swiper.use([Navigation, Pagination, EffectFade, Autoplay, Thumbs, Controller]);

import gsap from 'gsap';
import SplitText from '../../assets/js/gsap-bonus/SplitText';

gsap.registerPlugin([SplitText]);

export default () => {
  const imgs = Array.from(document.querySelectorAll(".intro-content__img"));
  const layers = Array.from(document.querySelectorAll(".intro__layer-slide"));
  const sliderheadings = Array.from(document.querySelectorAll(".intro-content__heading"));
  const timeline = gsap.timeline();
  let spltHeadingsArr = [];

  sliderheadings.forEach(heading=>{
    let splitedText = new SplitText(heading, {type: 'lines, chars', linesClass: "line"});

    spltHeadingsArr.push(splitedText);
  });


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
      delay: 5000,
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

    sliderheadings.forEach((heading, index)=>{

      // console.log("Текущий индекс: " + swiper.realIndex);

      if (index === swiper.realIndex) {
        timeline
          .fromTo(spltHeadingsArr[swiper.realIndex].chars, {
            yPercent: 100,
          },
          {
            yPercent: 0,
            duration: 0.4,
            ease: "none",
          }, "+=0.6");
      }

      if (index === swiper.realIndex - 1) {
        timeline
          .fromTo(spltHeadingsArr[swiper.realIndex - 1].chars, {
            yPercent: 0,
          },
          {
            yPercent: -120,
            duration: 0.4,
            ease: "none",
          });
      }


      // if (swiper.realIndex - 1 === -1) {
      //   console.log(spltHeadingsArr[spltHeadingsArr.length - 1]);

      //   timeline
      //     .fromTo(spltHeadingsArr[spltHeadingsArr.length - 1].chars, {
      //       yPercent: 0,
      //     },
      //     {
      //       yPercent: -120,
      //       duration: 0.4,
      //       ease: "none",
      //     });
      // }

    });
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
