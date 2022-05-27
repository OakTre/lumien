import Swiper from 'swiper/swiper-bundle';

export default () => {
  let catalogTopFilter = new Swiper(".js-catalog-top-filter-slider", {
    slidesPerView: 'auto',
    touchMoveStopPropagation: true,
    spaceBetween: 20,
  });

  window.lumien_API.initCatalogTopFilterSlider = () => {
    catalogTopFilter.update();
  };
};
