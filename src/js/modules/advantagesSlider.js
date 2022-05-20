import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin([ScrollTrigger]);

export default () => {
  const loader = document.querySelector('.loader--text');

  const showDemo = () => {
    gsap.utils.toArray('.js-section').forEach((section, index) => {
      const w = section.querySelector('.js-section-wrapper');
      const [x, xEnd] = [0, w.scrollWidth * -1];
      gsap.fromTo(w, {  x  }, {
        x: xEnd,
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          scrub: 0.2
        }
      });
    });
  }

  showDemo();

}
