import Swiper, {
  Navigation,
  Pagination,
  Controller,
  EffectFade,
  Thumbs,
  FreeMode
} from 'swiper/swiper-bundle';
import gsap from 'gsap'
import {
  ScrollTrigger
} from "gsap/dist/ScrollTrigger";
import SplitText from '../../assets/js/gsap-bonus/SplitText';
import {
  CSSRulePlugin
} from "gsap/dist/CSSRulePlugin";

Swiper.use([Navigation, Pagination, Controller, Thumbs, EffectFade, FreeMode]);
gsap.registerPlugin(SplitText, ScrollTrigger, CSSRulePlugin);

export default () => {
  if (window.matchMedia("(min-width: 767px)").matches) {
    const spheresTxtWrapper = document.querySelector(".js-text-spheres-wrapper");

    if (!spheresTxtWrapper) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".spheres",
        start: "top center",
      }
    });
    const timeline2 = gsap.timeline();
    const spherseHeadings = Array.from(document.querySelectorAll(".spheres__first-heading"));
    let headingArrs = [];

    spherseHeadings.forEach((heading) => {
      let splitedText = new SplitText(heading, {
        type: 'lines, chars',
        linesClass: "line"
      });

      headingArrs.push(splitedText);
    });

    gsap.set(spheresTxtWrapper, {
      y: "5rem",
      opacity: 0
    });
    gsap.set(".js-text-spheres-wrapper ._line", { xPercent: -100 })

    timeline
      .to(spheresTxtWrapper, {
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: "power3.out",
        clearProps: "all"
      })
      .to(".js-text-spheres-wrapper ._line", { xPercent: 0, duration: 0.8, ease: "power3.out", clearProps: "all" })

    const slides = Array.from(document.querySelectorAll(".spheres__nav-item"));
    const activeBorder = document.querySelector("._active-border");
    const sliderContainer = document.querySelector(".spheres__nav");

    let sliderThumb = new Swiper(".spheres__nav", {
      slidesPerView: 'auto',
      spaceBetween: 32,
      allowTouchMove: false,
      on: {
        init: function (swiper) {
          slides.forEach((slide, index) => {
            if (index === swiper.activeIndex) {
              setTimeout(() => {
                let offsetWidth = slide.querySelector("span").offsetWidth;

                activeBorder.style.width = offsetWidth + 12 + "px";
              }, 150);
            }
          });
        },
      },
    });

    let sliderSpheres = new Swiper(".spheres__slider", {
      effect: 'fade',
      fadeEffect: {
        crossFade: false,
      },
      allowTouchMove: false,
      speed: 300,
      thumbs: {
        swiper: sliderThumb,
        slideThumbActiveClass: "swiper-slide-thumb-active",
      },
      navigation: {
        nextEl: '.js-spheres-btn-next',
        prevEl: '.js-spheres-btn-prev',
      },
    });


    sliderSpheres.on('slideChange', function (swiper) {
      if (swiper.activeIndex !== swiper.thumbs.swiper.activeIndex) {
        sliderThumb.slideTo(swiper.activeIndex + swiper.thumbs.swiper.activeIndex - swiper.thumbs.swiper.activeIndex);
      };

      spherseHeadings.forEach((heading, index) => {
        if (index === swiper.realIndex) {
          const text = heading.closest(".spheres__content-info-block").querySelector(".js-text-spheres-wrapper");

          timeline2
            .fromTo(headingArrs[swiper.realIndex].chars, {
              yPercent: 100,
            }, {
              yPercent: 0,
              duration: 0.3,
              ease: "none",
            }, "-=0.3")
            .fromTo(text, {
              opacity: 0,
              y: "3rem"
            }, {
              opacity: 1,
              y: 0,
              duration: 0.3,
              ease: "none",
            }, "+=0.3");
        }

        if (index === swiper.realIndex - 1) {
          timeline
            .fromTo(headingArrs[swiper.realIndex - 1].chars, {
              yPercent: 0,
            }, {
              yPercent: -120,
              duration: 0.3,
              ease: "none",
            }, "-=0.3");
        }
      });

      slides.forEach((slide, index) => {
        if (index === swiper.activeIndex) {
          let offsetWidth = slide.querySelector("span").offsetWidth;

          activeBorder.style.left = -0.6 + "rem";
          activeBorder.style.width = offsetWidth + 12 + "px";
        };

        if (swiper.activeIndex === slides.length - 1) {
          let offsetWidth = sliderContainer.offsetWidth - slide.offsetWidth;

          activeBorder.style.left = offsetWidth / 10 - 0.6 + "rem";
        };
      });

    });
  };
};
