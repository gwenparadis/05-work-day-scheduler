// current day displayed at the top of the page using moment.js
let currentDay = moment().format("MMM Do, YYYY");
$("#currentDay").text(currentDay)

//past time gray background, current time red background, future time green background
const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('H')) - 2;

Array.from(rows).forEach(function(row) {
  let
    rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {
    // Compares row id to current hour and sets color accordingly
    if (currentHour === rowHour) {
      row.classList.add("present");
      row.children[2].classList.add("present");
    } else if ((currentHour < rowHour) && (currentHour > rowHour - 9)) {
        row.classList.add("future");
        row.children[2].classList.add("future");
    } else if ((currentHour > rowHour) && (currentHour < rowHour + 9)) {
       row.classList.add("past");
       row.children[2].classList.add("past");
    }
  }
});

document.getElementById("text-area").placeholder = "Event";