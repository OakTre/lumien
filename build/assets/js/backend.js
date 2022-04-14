document.addEventListener("DOMContentLoaded", function (event) {
  // обновления контента после выбора значение в селекте на старнице "Материалы для скачивания"
  const filesSelect = document.querySelector(".js-files-select");

  if (filesSelect) {
    filesSelect.addEventListener("change", (e) => {
      let self = e.target;
      let value = e.target.options[e.target.selectedIndex].value;

      // какие-то действия
    });
  }
  // END
});
