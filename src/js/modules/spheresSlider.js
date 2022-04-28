import Swiper, {
  Navigation,
  Pagination,
  Controller,
  EffectFade,
  Thumbs,
  FreeMode
} from 'swiper/swiper-bundle';

Swiper.use([Navigation, Pagination, Controller, Thumbs, EffectFade, FreeMode]);

export default () => {
  if (window.matchMedia("(min-width: 767px)").matches) {
    const slides = Array.from(document.querySelectorAll(".spheres__nav-item"));
    const activeBorder = document.querySelector("._active-border");

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
                console.log(activeBorder);

                activeBorder.style.width = offsetWidth + 10 + "px";
              }, 150);
            }
          });
        },
      },
    });

    let sliderSpheres = new Swiper(".spheres__slider", {
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      allowTouchMove: false,
      speed: 100,
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

      slides.forEach((slide, index) => {
        if (index === swiper.activeIndex) {
          let offsetWidth = slide.querySelector("span").offsetWidth;

          activeBorder.style.width = offsetWidth + 10 + "px";
        }
      });
    });
  }


  // sliderSpheres.controller.control = sliderThumb;
  // sliderThumb.controller.control = sliderSpheres;
};
