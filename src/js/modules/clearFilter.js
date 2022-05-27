import clearForm from "../helpers/clearForm.js";

export default () => {
  const clearBtn = Array.from(document.querySelectorAll(".js-clear-btn"));
  const filterFormDesctop = document.querySelector(".js-filter-form-descktop");
  const filterFormMobile = document.querySelector(".js-filter-form-mobile");

  if (!clearBtn) return;

  clearBtn.forEach(btn => {
    btn.addEventListener("click", () => {
      const form =  btn.dataset.form;
      btn.classList.remove("is-active");

      switch (form) {
        case "desctop":
          clearForm(filterFormDesctop);
          break;
        case "mobile":
          clearForm(filterFormMobile);
          break;
      }
    });
  })
};
