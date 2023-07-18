// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in
$(function () {
  var dateEl = $("#currentDay")
  dateEl.text(dayjs().format("MMMM D YYYY"))
});
