"use strict";

/*Default*/
$(function () {
  console.log('Hello Bootstrap5');
});
/*AOS*/

AOS.init();
/*DatePicker*/

var elem = document.querySelector('input[name="datepicker"]');
var datepicker = new Datepicker(elem, {
  nextArrow: '>',
  prevArrow: '<'
});
//# sourceMappingURL=all.js.map
