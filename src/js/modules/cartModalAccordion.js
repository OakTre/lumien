import gsap from 'gsap';

export default () => {
  const modalBtn = document.querySelector('.modal-product__mobile-legend');
  const mobile = window.matchMedia("(max-width: 992px)");
  let isOpen = false;
  const accordions = gsap.utils.toArray(".js-mobile-accordion");
  const btns = gsap.utils.toArray(".js-drop-menu-mobile-btn");
  const animations = [];

  function toggleAnimation(btn) {
    // Save the current state of the clicked animation
    const selectedReversedState = btn.animation.reversed();

    // Reverse all animations
    // animations.forEach(animation => animation.reverse());

    // Set the reversed state of the clicked accordion element to the opposite of what it was before
    btn.animation.reversed(!selectedReversedState);
  }

  function createAnimation(element) {
    const accordionBtn = element.querySelector(".js-drop-menu-mobile-btn");
    const accordionBodywrapper = element.querySelector(".js-drop-menu-mobile-container");

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

  if (mobile.matches) {
    accordions.forEach(accordion => createAnimation(accordion));

    btns.forEach(btn => {
      btn.addEventListener("click", () => toggleAnimation(btn));
    });
  };
};
