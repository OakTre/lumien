import Choices from 'choices.js';

export default function initSelects() {
  const customSelects = Array.from(document.querySelectorAll('.js-custom-select'));
  const customSelectsWithSearch = Array.from(document.querySelectorAll('.js-custom-select-search'));
  const clearBtns = document.querySelectorAll(".js-choises-clear");
  let choices = [];

  if (customSelects.length) {
    customSelects.forEach((select) => {
      const input = select.closest('.custom-select') ? select.closest('.custom-select').querySelector('input') : null;

      const slct = new Choices(select, {
        searchEnabled: false,
        itemSelectText: '',
        shouldSort: false,
        allowHTML: true,
        renderSelectedChoices: 'always',
      });

      // 😭😭😭😭😭
      if (select.hasAttribute('multiple')) {
        slct.passedElement.element.addEventListener('choice', function (event) {
          slct.getValue(true).forEach(item => {
            if (item !== event.detail.choice.value) return;
            setTimeout(() => {
              slct.removeActiveItemsByValue(event.detail.choice.value);
              setValue(slct, input);
            }, 100)
          });
        });

        slct.passedElement.element.addEventListener('change', () => {
          setValue(slct, input);
        })

        setValue(slct, input);

        const multipleLabel = select.dataset.name || "тест";
        select.parentElement.textContent = multipleLabel;
      }

      function setValue(choice, input) {
        if (input) {
          input.value = choice.getValue(true).length ? JSON.stringify(choice.getValue(true)) : "";
          const evt = document.createEvent('HTMLEvents');
          evt.initEvent('input', true, true);
          input.dispatchEvent(evt);
        }
      }

      choices.push(slct);
    });

    clearBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        choices.forEach((slct) => {
          slct.destroy();
          slct.init();
        });
      });
    });
  }
};
