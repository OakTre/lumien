import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin([ScrollTrigger]);

export default () => {
  const loader = document.querySelector('.loader--text');

  const showDemo = () => {
    gsap.utils.toArray('.js-section').forEach((section, index) => {
      const w = section.querySelector('.js-section-wrapper');
      const [x, xEnd] = [0, section.offsetWidth - w.offsetWidth];
      gsap.fromTo(w, {  x  }, {
        x: xEnd,
        scrollTrigger: {
          trigger: section,
          start: "top center",
          pin: ".advantages__container",
          scrub: 0.2,
        }
      });
    });
  }

  showDemo();
};
