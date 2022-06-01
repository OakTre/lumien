export default function clearForm(form) {
  const inputs = Array.from(form.querySelectorAll("input"));
  const textareas = Array.from(form.querySelectorAll("textarea"));
  const checkboxs = Array.from(form.querySelectorAll("input[type=checkbox]"));
  const choisesItem = Array.from(form.querySelectorAll(".choices__item--choice"));
  // const customSelects = Array.from(window.kdwAPI.customSelects);
  // const validatedForms = Array.from(window.kdwAPI.parsleyForms);

  inputs.forEach(inpt => {
    inpt.value = "";
  });
  textareas.forEach(txtarea => {
    txtarea.value = "";
  });
  checkboxs.forEach(chckBox => {
    chckBox.checked = false;
  });

  console.log(choisesItem.length);

  if (choisesItem.length) {
    choisesItem.forEach(item => {
      item.classList.remove("is-selected");
    })
  }

  // validatedForms.forEach(form => {
  //   form.reset();
  // });

  // customSelects.forEach(select => {
  //   select.destroy();
  //   select.init();
  // });
};

window.clearForm = clearForm;
