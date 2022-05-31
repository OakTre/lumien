import gsap from "gsap";
import {
  ScrollTrigger
} from "gsap/dist/ScrollTrigger";

export default () => {
  if (!document.querySelector(".about-company__img")) return;

  gsap.set(".about-company__num", {
    yPercent: 150
  });

  gsap.set(".about-company__txt", {
    yPercent: 150
  });

  gsap.set(".about-company__img", {
    yPercent: 70,
    opacity: 0
  });

  ScrollTrigger.create({
    trigger: ".about-company",
    start: "top 70%",
    onEnter: function () {
      gsap.to(".about-company__num", {
        yPercent: 0,
        duration: 0.3
      });

      gsap.to(".about-company__txt", {
        yPercent: 0,
        duration: 0.3
      });

      gsap.to(".about-company__img", {
        yPercent: 0,
        opacity: 1,
        duration: 0.3
      });
    },
    onEnterBack: function () {

    },
    onLeave: function () {

    }
  });
};
