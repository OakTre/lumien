export default () => {
  const btn = document.querySelector(".js-mobile-btn");
  const list = document.querySelector(".js-mobile-list");

  if (!btn) return;

  btn.addEventListener("click", ()=> {
    btn.classList.toggle("is-active");
    list.classList.toggle("is-active");
  });
};
