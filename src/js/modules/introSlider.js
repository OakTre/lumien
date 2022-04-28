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
  const sliderTexts = Array.from(document.querySelectorAll(".js-intro-content-anim"));
  const timeline = gsap.timeline();
  let spltHeadingsArr = [];

  sliderheadings.forEach(heading => {
    let splitedText = new SplitText(heading, {
      type: 'lines, chars',
      linesClass: "line"
    });

    spltHeadingsArr.push(splitedText);
  });

  let sliderIntroNav = new Swiper(".intro-slider-nav", {
    slidesPerView: 1,
    direction: 'vertical',
    allowTouchMove: false,
    spaceBetween: 30,
    watchSlidesProgress: true,
    breakpoints: {
      280: {
        slidesPerView: 'auto',
        spaceBetween: 10,
        direction: 'horizontal',
      },
      1200: {
        slidesPerView: 1,
        direction: 'vertical',
        spaceBetween: 30,
      },
    },
  });

  let sliderIntro = new Swiper(".intro-content-slider", {
    slidesPerView: 'auto',
    spaceBetween: 0,
    allowTouchMove: false,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    thumbs: {
      swiper: sliderIntroNav,
    },
    navigation: {
      nextEl: '.js-intro-btn-next',
      prevEl: '.js-intro-btn-prev',
    },
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
  });

  // sliderIntroNav.controller.control = sliderIntro;
  // sliderIntro.controller.control = sliderIntroNav;

  sliderIntro.on('slideChange', function (swiper) {
    imgs.forEach(img => {
      img.classList.remove("mod-show")
    });
    imgs[swiper.activeIndex].classList.add("mod-show");

    layers.forEach(layer => {
      layer.classList.remove("mod-show")
    });
    layers[swiper.activeIndex].classList.add("mod-show");

    sliderheadings.forEach((heading, index) => {

      if (index === swiper.realIndex) {
        timeline
          .fromTo(spltHeadingsArr[swiper.realIndex].chars, {
            yPercent: 100,
          }, {
            yPercent: 0,
            duration: 0.4,
            ease: "none",
          }, "+=0.6");
      }

      if (index === swiper.realIndex - 1) {
        timeline
          .fromTo(spltHeadingsArr[swiper.realIndex - 1].chars, {
            yPercent: 0,
          }, {
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

    sliderTexts.forEach((text, index) => {
      let desrText = text.querySelector("p");
      let btnText = text.querySelector(".intro-content__btn-text");
      let circle = text.querySelector(".intro-content__btn-outer-circle");
      let icon = text.querySelector(".intro-content__btn-icon");

      if (index === swiper.realIndex) {
        timeline
          .fromTo(desrText, {
            yPercent: 10,
            opacity: 0
          }, {
            yPercent: 0,
            opacity: 1,
            duration: 0.4,
            ease: "none",
          })
          .fromTo(btnText, {
            yPercent: 10,
            opacity: 0
          }, {
            yPercent: 0,
            opacity: 1,
            duration: 0.4,
            ease: "none",
            clearProps: "all"
          }, "-=0.4")
          .fromTo(circle, {
            scale: 0.8,
            opacity: 0
          }, {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            ease: "none",
            clearProps: "all"
          }, "-=0.6")
          .fromTo(icon, {
            opacity: 0
          }, {
            opacity: 1,
            duration: 0.4,
            ease: "none",
            clearProps: "all"
          }, "-=0.6");
      }
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
