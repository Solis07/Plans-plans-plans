// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in
$(function () {
  var dateEl = $("#currentDay")
  dateEl.text(dayjs().format("MMMM D YYYY"))

  var currentTime = dayjs().hour()
  var timeBlock = $(".time-block")

  timeBlock.each(function () {
    var timeBlockId = $(this).attr("id").slice(5)
    if (timeBlockId < currentTime) {
      $(this).children(".description").attr("class", "col-8 col-md-10 description past")
    }
  })
});

