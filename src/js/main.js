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
import contactsMap from './modules/contactsMap';
import search from './modules/search';
import casesSlider from './modules/casesSlider';
import sliderEquipment from './modules/sliderEquipment';
import suitableModelsSlider from './modules/suitableModelsSlider';
import cartImgsSlider from './modules/cartImgsSlider';
import detailSlider from './modules/detailSlider';
import tabs from './modules/tabs.js';
import sectionAnimation from './modules/sectionAnimation';
import fixedHeader from './modules/fixedHeader.js';
import anchorLInks from './modules/anchorLInks.js';
import productIntroSlider from './modules/productIntroSlider.js';
import animatedBlocks from './modules/animatedBlocks.js';
import smoothscroll from 'smoothscroll-polyfill';
import showMoreBtns from './modules/showMoreBtns.js';
import aboutSectionAnim from './modules/aboutSectionAnim';
import faqBtn from './modules/faqBtn.js';
import playVideo from './modules/playVideo.js';
import glossaryLetters from './modules/glossaryLetters.js';
import catalogTopFilterSlider from './modules/catalogTopFilterSlider.js';
import breadcrumbsCostil from './modules/breadcrumbsCostil.js';
import initModal from './modules/initModal.js';
import clearFilter from './modules/clearFilter.js';
import spheresMobileTabs from './modules/spheresMobileTabs.js';
import cartModalAccordion from './modules/cartModalAccordion.js';
import dateInput from './modules/dateInput.js';
import aboutPageHistorySlider from './modules/aboutPageHistorySlider.js';

smoothscroll.polyfill();

window.addEventListener("load", () => {
  closePreloadre();
});

documenReady(() => {
  window.lumien_API = { equipmentSelects: [] };

  if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
  }

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
  contactsMap();
  search();
  casesSlider();
  sliderEquipment();
  suitableModelsSlider();
  detailSlider();
  tabs();
  sectionAnimation();
  fixedHeader();
  anchorLInks();
  productIntroSlider();
  animatedBlocks();
  showMoreBtns();
  aboutSectionAnim();
  faqBtn();
  playVideo();
  glossaryLetters();
  catalogTopFilterSlider();
  breadcrumbsCostil();
  initModal();
  clearFilter();
  spheresMobileTabs();
  cartModalAccordion();
  dateInput();
  aboutPageHistorySlider();

  // always last
  cartImgsSlider();
});
