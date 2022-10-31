// current day displayed at the top of the page using moment.js
let currentDay = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").text(currentDay)

//past time gray background, current time red background, future time green background
const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('H'));

Array.from(rows).forEach(function (row) {
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

//save button variables
const saveBtns = document.getElementsByClassName('saveBtn');
let scheduledItems = document.getElementsByClassName('schedule-item').value;

//save to local storage


for (let i = 0; i < saveBtns.length; i++) {
  //add event listener:
  saveBtns[i].addEventListener("click", function() {
    //confirm the click function is working:
    console.log("you clicked save, bestie!");

    //use save button to set the scheduled items to local storage
    localStorage.setItem('schedule-item', scheduledItems);
    console.log(localStorage.key('schedule-item'));
  });
};