import gsap from "gsap";
import { disableScroll, enableScroll } from '../helpers/disableScroll';

export default () => {
  const timeline = gsap.timeline({
    paused: true,
    reversed: true
  });
  const timeline2 = gsap.timeline({
    paused: true,
  });
  const searchBtn = document.querySelector(".js-search-btn");
  const searchCloseBtn = document.querySelector(".js-search-close-btn");
  const searchContainer = document.querySelector(".search");
  const header = document.querySelector(".header");
  const searchForm = document.querySelector(".search__container");
  const searchInput = document.querySelector(".js-search-input");
  const searchContent = document.querySelector(".search__content");
  const layer = document.querySelector(".search__layer");

  gsap.set(searchContainer, {autoAlpha: 0});
  gsap.set(searchForm, {yPercent: -150});

  timeline
    .to(header, {autoAlpha: 0, ease: "power4.out"}, "-=0.8")
    .to(searchContainer, {autoAlpha: 1, duration: 0.8, ease: "power4.out"}, "-=0.8")
    .to(searchForm, {yPercent: 0, duration: 0.3, ease: "power4.out"}, "-=0.4")

  timeline2
    .to(searchContainer, {autoAlpha: 0, duration: 0.9, ease: "power4.out"})
    .to(header, {autoAlpha: 1, ease: "power4.out"}, "-=0.9")

  searchBtn.addEventListener("click", ()=>{
    timeline.play();

    disableScroll();

    setTimeout(() => {
      searchInput.focus();
    }, 1000);
  });

  searchCloseBtn.addEventListener("click", ()=>{
    timeline.reverse();

    if (searchContent.classList.contains("is-shown")) {
      searchContent.classList.remove("is-shown");
    }

    enableScroll();

    searchInput.value = "";

    setTimeout(() => {
      searchBtn.focus();
    }, 1000);
  });

  layer.addEventListener("click", ()=>{
    timeline.reverse();

    if (searchContent.classList.contains("is-shown")) {
      searchContent.classList.remove("is-shown");
    }

    enableScroll();

    searchInput.value = "";

    setTimeout(() => {
      searchBtn.focus();
    }, 1000);
  });
};
