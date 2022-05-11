export default () => {
  const letters = Array.from(document.querySelectorAll(".glossary__container-item"));

  letters.forEach((letter) => {
    letter.addEventListener("click", ()=> {
      letters.forEach((letter) => { letter.classList.remove("is-active") });

      letter.classList.add("is-active");
    });
  });
};
