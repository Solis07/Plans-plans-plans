// Wraps all the code that interacts with the DOM in a jQuery call.
$(function () {


  var dateEl = $("#currentDay")
  var timeBlock = $(".time-block")
  var saveBtn = $(".saveBtn")

  dateEl.text(dayjs().format("MMMM D YYYY"))
  
  timeBlock.each(function () {
    var currentTime = dayjs().hour()
    var timeBlockId = $(this).attr("id").slice(5)
    if (timeBlockId < currentTime) {
      $(this).children(".description").attr("class", "col-8 col-md-10 description past")
    } else if (timeBlockId > currentTime) {
      $(this).children(".description").attr("class", "col-8 col-md-10 description future")
    } else if (timeBlockId == currentTime) {
      $(this).children(".description").attr("class", "col-8 col-md-10 description present")
    }  
  })
 
  saveBtn.on("click", function (event) {
    event.preventDefault()
    var key = $(this).parent().attr("id")
    var value = $(this).siblings(".description").val()
    
    localStorage.setItem(key, JSON.stringify(value))
  })
  
  for (var i = 9; i <= 17; i++) {
    $(`#hour-${i} textarea`).val(JSON.parse(localStorage.getItem(`hour-${i}`)))
  }
});

