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

  // поиск в хедере
  let timerDelay;
  const searchInput = document.querySelector(".js-search-input");
  const searchForm = document.querySelector(".search__form");
  const searchContent = document.querySelector(".search__content");
  const searchContentOk = document.querySelector(".search__content-wrapper");
  const searchContentError = document.querySelector(".search__content-empty-results");

  searchInput.addEventListener("keyup", () => {
    clearTimeout(timerDelay);

    timerDelay = setTimeout(() => {

      // показываем контент после подставновки результатов поиска
      searchContent.classList.add("is-shown");

      // если нет результатов
      // searchContentOk.classList.add("is-hidden");
      // показываем заглушку
      // searchContentError.classList.add("is-active");

      // убираем контент если пустое поле ввода
      if (searchInput.value === "") {
        searchContent.classList.remove("is-shown");
      }

    }, 500);
  });

  // отправка формы и перевод на страницу с результатами
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });
  // поиск в хедере END

  // поиск в мобилке
  let timerDelayMobile;
  const searchInputMobile = document.querySelector(".js-search-input-mobile");
  const searchResults = document.querySelector(".menu__search-results");
  const hideWhenSearch = document.querySelector(".js-hide-when-search");

  searchInputMobile.addEventListener("keyup", () => {
    clearTimeout(timerDelayMobile);

    timerDelayMobile = setTimeout(() => {

      // показываем контент после подставновки результатов поиска
      searchResults.classList.add("is-shown");
      hideWhenSearch.style.display = "none";

      // если нет результатов
      // searchContentOk.classList.add("is-hidden");
      // показываем заглушку
      // searchContentError.classList.add("is-active");

      // убираем контент если пустое поле ввода
      if (searchInputMobile.value === "") {
        searchResults.classList.remove("is-shown");
        hideWhenSearch.style.display = "block";
      }

    }, 500);
  });
  // поиск в мобилке END

  // фильтр каталога
  // размер рабочей области
  // если нет подходящих размеров
  const sizeBtns = Array.from(document.querySelectorAll(".js-sizes-btn"));

  sizeBtns.forEach(btn => {
    btn.addEventListener("click", ()=> {
      const values = JSON.parse(btn.dataset.inches);
      const parent = btn.closest(".js-sizes-parent");
      const errorConatiner = parent.querySelector(".side-filter__error");
      const sizeValues = Array.from(parent.querySelectorAll(".js-sizes-value"));

      for (const [index, item] of values.entries()) {
        sizeValues[index].value = item;
      };

      errorConatiner.classList.add("is-hidden");
    });
  });
  // фильтр каталога END

  // кнопка показакть\скрыть
  const btns = Array.from(document.querySelectorAll(".js-btn-show-hide"));

  btns.forEach( btn => {
    btn.addEventListener("click", ()=> {
      btn.classList.toggle("is-active");

      btn.closest(".js-btn-show-hide-parent").querySelector(".side-filter__block-list").classList.toggle("is-active");
    });
  });

  // кнопка показакть\скрыть END
});
