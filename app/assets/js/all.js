$(function() {
  console.log('Hello Bootstrap5');
});

/*DatePicker*/
const elem = document.querySelector('input[name="datepicker"]');
    const datepicker = new Datepicker(elem, {
    nextArrow: '>',
    prevArrow: '<',
    });