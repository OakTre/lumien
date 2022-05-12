import gsap from "gsap";
import {
  ScrollTrigger
} from "gsap/dist/ScrollTrigger";
import SplitText from '../../assets/js/gsap-bonus/SplitText';

gsap.registerPlugin(SplitText, ScrollTrigger);

export default () => {
  let headings = gsap.utils.toArray(".js-animated-heading");

  headings.forEach((heading) => {
    let splitedText = new SplitText(heading, {
      type: 'lines, chars',
      linesClass: "line"
    });

    gsap.set(splitedText.chars, {
      yPercent: 200
    });

    ScrollTrigger.create({
      trigger: heading,
      onEnter: function () {
        gsap.to(splitedText.chars, {
          yPercent: 0,
          duration: 0.6
        })
      },
      onEnterBack: function () {

      },
      onLeave: function () {

      }
    });
  })

  window.lumien_API.refreshScollTrigger = () => {
    ScrollTrigger.refresh();
  }
};
