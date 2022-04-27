export default () => {
  const btns = Array.from(document.querySelectorAll(".js-show-more-btn"));

  if (!btns) return;

  btns.forEach(btn => {
    const elmnts = btn.closest(".js-show-more-btn-parent").querySelectorAll(".js-show-more-elmnts");

    if (elmnts.length <= 3) {
      btn.style.display = "none";
    }

    btn.addEventListener("click", ()=>{
      const parent = btn.closest(".js-show-more-btn-parent");

      parent.classList.toggle("is-active");
      btn.classList.toggle("is-active");
    });
  });
};
