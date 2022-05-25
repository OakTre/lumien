import gsap from "gsap";

export default () => {
  const accordions = gsap.utils.toArray(".accordion") || gsap.utils.toArray(".js-accordion");
  const btns = gsap.utils.toArray(".js-drop-menu-btn");
  const animations = [];

  accordions.forEach(accordion => createAnimation(accordion));

  btns.forEach(btn => {
    btn.addEventListener("click", () => toggleAnimation(btn));
  });

  function toggleAnimation(btn) {
    // Save the current state of the clicked animation
    const selectedReversedState = btn.animation.reversed();

    // Reverse all animations
    // animations.forEach(animation => animation.reverse());

    // Set the reversed state of the clicked accordion element to the opposite of what it was before
    btn.animation.reversed(!selectedReversedState);
  }

  function createAnimation(element) {
    const accordionBtn = element.querySelector(".js-drop-menu-btn");
    const accordionBodywrapper = element.querySelector(".js-drop-menu-container");

    gsap.set(accordionBodywrapper, { height: "auto" });

    const anima = gsap.from(accordionBodywrapper, {
      height: 0,
      duration: 0.2,
      ease: "none",
      clearProps: "all",
      reversed: true,
      onStart: () => {
        accordionBtn.classList.add("is-active");
      },
      onReverseComplete: () => {
        accordionBtn.classList.remove("is-active");
      }
    });

    accordionBtn.animation = anima;
    animations.push(anima);
  }
}
