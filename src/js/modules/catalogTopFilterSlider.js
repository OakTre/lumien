import Swiper from 'swiper/swiper-bundle';

export default () => {
  let catalogTopFilter = new Swiper(".js-catalog-top-filter-slider", {
    slidesPerView: 5,
    touchMoveStopPropagation: true,
    spaceBetween: 20,
    // breakpoints: {
    //   280: {
    //     slidesPerView: 1.1,
    //     spaceBetween: 10
    //   },
    //   767: {
    //     slidesPerView: 2,
    //     spaceBetween: 20
    //   },
    //   1200: {
    //     slidesPerView: 3,
    //     spaceBetween: 20
    //   },
    // }
  });
};
