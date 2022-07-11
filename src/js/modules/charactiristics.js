export default () => {
  const charsBtn = document.querySelector(".product-characteristics__show-more-btn");
  const charsRows = Array.from(document.querySelectorAll(".product-characteristics__row"));
  const charsParents = Array.from(document.querySelectorAll(".product-characteristics"));
  let flag = true;

  if (!charsBtn) return;

  const hideRows = (parent, count) => {
    parent.querySelectorAll(".product-characteristics__row").forEach((row, i) => {
      if (i >= count) {
        row.classList.add("hidden");
      }
    });
  };

  charsParents.forEach(parent => {
    const charsCount = Number(parent.dataset.count);

    hideRows(parent, charsCount);
  });

  charsBtn.addEventListener("click", () => {
    switch (flag) {
      case true:
        charsRows.forEach(row => row.classList.remove("hidden"));
        flag = false;
        charsBtn.innerHTML = "Скрыть";
        break;
      case false:
        charsParents.forEach(parent => {
          const charsCount = Number(parent.dataset.count);

          hideRows(parent, charsCount);
        });
        charsBtn.innerHTML = "Показать еще";
        flag = true;
        break;
    }

  });
};
