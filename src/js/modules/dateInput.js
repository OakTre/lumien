import AirDatepicker from 'air-datepicker'

export default () => {
  const datePickers = Array.from(document.querySelectorAll('.js-date-picker'));

  datePickers.forEach(datePicker => {
    const instance = new AirDatepicker(datePicker, {
      minDate: new Date(),
    });
  });
};
