export default () => {
  const charsBtn = document.querySelector(".product-characteristics__show-more-btn");
  const charsCount = Number(document.querySelector(".product-characteristics").dataset.count);
  const charsRows = Array.from(document.querySelectorAll(".product-characteristics__row"));
  let flag = true;

  if (!charsBtn) return;

  charsRows.forEach((row, i) => {
    if (i >= charsCount) {
      row.classList.add("hidden");
    }
  });

  charsBtn.addEventListener("click", () => {
    switch (flag) {
      case true:
        charsRows.forEach(row => row.classList.remove("hidden"));
        flag = false;
        charsBtn.innerHTML = "Скрыть";
        break;
      case false:
        charsRows.forEach((row, i) => {
          if (i >= charsCount) {
            row.classList.add("hidden");
          }
        });
        charsBtn.innerHTML = "Показать еще";
        flag = true;
        break;
    }

  });
};
