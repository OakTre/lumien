import Choices from 'choices.js';

export default function initSelects() {
  const customSelects = Array.from(document.querySelectorAll('.js-equipment-select'));
  const clearBtns = document.querySelectorAll(".js-equipment-clear");
  let choices = [];

  if (document.querySelectorAll('.js-equipment-select')) {
    customSelects.forEach((select) => {
      let slct = new Choices(select, {
        searchEnabled: false,
        itemSelectText: '',
        shouldSort: false,
				allowHTML: true,
      });

      window.lumien_API.equipmentSelects.push(slct)

      choices.push(slct);
    });

    clearBtns.forEach((btn)=> {
      btn.addEventListener("click", ()=>{
        choices.forEach((slct)=>{
          slct.destroy();
          slct.init();
        });
      });
    });
  }
};
