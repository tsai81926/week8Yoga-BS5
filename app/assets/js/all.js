/*Default*/
$(function() {
  console.log('Hello Bootstrap5');
});

/*AOS*/
AOS.init();

/*DatePicker*/
const elem = document.querySelector('input[name="datepicker"]');
    const datepicker = new Datepicker(elem, {
    nextArrow: '>',
    prevArrow: '<',
  });


