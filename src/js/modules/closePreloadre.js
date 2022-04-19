import gsap from "gsap";

export default () => {
  const preloaderBtn = document.querySelector(".preloder__logo");
  const preloader = document.querySelector(".preloder");
  const timeline = gsap.timeline();
  const intro = document.querySelector(".intro");

  timeline
    .to(preloader, {
      yPercent: -100,
      duration: 0.7
    }).to(preloader, {
      autoAlpha: 0
    })
    // .fromTo(intro, {
    //   y: "2.5rem"
    // }, {
    //   y: 0,
    //   duration: 0.5,
    //   ease: "none",
    //   clearProps: "all"
    // }, "-=0.7");
};
