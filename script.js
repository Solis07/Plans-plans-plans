// Wraps all the code that interacts with the DOM in a jQuery call.
$(function () {

// Created variables that will be used to display the date, time block, and when someone clicks the save button.
  var dateEl = $("#currentDay")
  var timeBlock = $(".time-block")
  var saveBtn = $(".saveBtn")

// Displays how the date will be displayed on the webpage in the header. Example July 18 2023. 
  dateEl.text(dayjs().format("MMMM D YYYY"))
  
// Changes depending on the current time and will display each time block either in the past, present, or future with a different color.
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

 // The save button function will save what the user enters in the textarea to the localStorage. The button must be clicked in order for the description to be saved.
  saveBtn.on("click", function (event) {
    event.preventDefault()
    var key = $(this).parent().attr("id")
    var value = $(this).siblings(".description").val()
    
    localStorage.setItem(key, JSON.stringify(value))
  })

  // The for loop will retrieve what the user has entered into the textarea from localStorage for each time block.
  for (var i = 9; i <= 17; i++) {
    $(`#hour-${i} textarea`).val(JSON.parse(localStorage.getItem(`hour-${i}`)))
  }
});

