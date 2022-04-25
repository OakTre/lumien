import Swiper, {
  Navigation,
  Pagination
} from 'swiper/swiper-bundle';
import { primaryInput } from 'detect-it';

Swiper.use([Navigation, Pagination]);

export default function catalogCardsSliders() {
  const initializeCatalogCardsSliders = () => {
    const elements = Array.from(document.querySelectorAll('.cart'));

    elements.forEach(element => {
      const container = element.querySelector('.js-cart-img-slider');

      const DEBUG = false;
      if (!container) {
        console.error('No swiper container in card', card);
        return;
      }

      let trackingCursor = false;
      let currentSlideIndex;

      const instance = new Swiper(container, {
        watchOverflow: true,
        speed: 500,
        longSwipesRatio: 0.25,
        allowTouchMove: primaryInput === 'touch' ? true : false,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        pagination: {
          el: element.querySelector('.cart__img-pagination'),
          type: 'bullets',
          clickable: true
        }
      });

      const slidesCount = instance.slides.length;

      container.addEventListener('mouseenter', () => {
        trackingCursor = true;
      });
      container.addEventListener('mouseleave', () => {
        trackingCursor = false;
        instance.slideTo(0);
      });

      container.addEventListener('mousemove', e => {
        if (!trackingCursor) return;
        e.stopPropagation();

        const rect = e.currentTarget.getBoundingClientRect();
        const offsetX = parseInt(e.clientX - rect.left, 10);

        const width = e.currentTarget.offsetWidth;

        const progress = Math.ceil((offsetX / width) * slidesCount);
        let activeSlideIndex = progress - 1;

        if (DEBUG) {
          console.log({
            activeSlideIndex,
            progress,
            offsetX
          });
        }

        if (activeSlideIndex !== currentSlideIndex) {
          instance.slideTo(activeSlideIndex);
        }
      });
    });
  };

  window.lumien_API.initializeCatalogCardsSliders = initializeCatalogCardsSliders;

  initializeCatalogCardsSliders();
}
