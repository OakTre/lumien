import gsap from 'gsap';
import { disableScroll, enableScroll } from '../helpers/disableScroll';

export default () => {
  const openBtns = document.querySelectorAll(".js-open-menu-btn");
  const closeBtns = document.querySelectorAll(".js-close-menu-btn");
  const timeline = gsap.timeline({
    paused: true,
    reversed: true
  });
  const layer = document.querySelector(".menu_layer");

  gsap.set(".menu", {autoAlpha: 0});
  gsap.set(".menu_layer", {autoAlpha: 0});
  gsap.set(".menu__container", {yPercent: -100});
  gsap.set(".menu__block", {opacity: 0, y: '2rem'});
  gsap.set("._bottom-line", {xPercent: -100});

  timeline
    .to(".menu", {autoAlpha: 1, duration: 0.1})
    .to(".menu_layer", {autoAlpha: 1, duration: 0.1}, "-=0.1")
    .to(".menu__container", {yPercent: 0}, "-=0.1")
    .to(".menu__block", {opacity: 1, y: 0, duration: 0.2})
    .to("._bottom-line", {xPercent: 0}, "-=0.1");

  openBtns.forEach(btn=>{
    btn.addEventListener("click", ()=>{
      timeline.play();
      disableScroll();
    });
  });

  closeBtns.forEach((closeBtn)=>{
    closeBtn.addEventListener("click", ()=>{
      timeline.reverse();
      enableScroll();
    });
  });

  layer.addEventListener("click", ()=>{
    timeline.reverse();
    enableScroll();
  });
};
