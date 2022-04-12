// eslint-disable-next-line import/no-extraneous-dependencies
import 'focus-visible';
import documenReady from './helpers/documenReady';
import lazyIMages from './modules/lazyIMages';
import validation from './modules/validation';
import inputmask from './modules/inputmask';
import newsSlider from './modules/newsSlider';
import advantagesSlider from './modules/advantagesSlider';
import initSelects from './modules/initSelects';
import equipmentSelects from './modules/equipmentSelects';
import spheresSlider from './modules/spheresSlider';
import openMenu from './modules/openMenu';
import closePreloadre from './modules/closePreloadre';
import introSlider from './modules/introSlider';
import initAccordion from './modules/initAccordion';

window.onload = () => {
  closePreloadre();
};

documenReady(() => {
  lazyIMages();
  validation();
  inputmask();
  newsSlider();
  advantagesSlider();
  initSelects();
  equipmentSelects();
  spheresSlider();
  openMenu();
  introSlider();
  initAccordion();
});
