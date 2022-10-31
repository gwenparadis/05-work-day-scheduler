// current day displayed at the top of the page using moment.js
let currentDay = moment().format("dddd MMM Do, YYYY");
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

//adds functionality to the save buttons:
const saveBtns = document.getElementsByClassName('saveBtn');
let userInput = document.getElementsByClassName('schedule-item');

for (let i = 0; i < saveBtns.length; i++) {
//add event listener:
saveBtns[i].addEventListener("click", function() {
  console.log("you clicked save, bestie!")

  //save button saves the item to that line, persists even after refresh
});
};

 /*
saveEvent(userInput.value);
console.log(localStorage.key(userInput.value));
console.log(localStorage.getItem(userInput.value));

function saveEvent(scheduleItem) {
  localStorage.setItem(scheduleItem);
};
*/

//save button sets userinput to local storage
//get local storage to replace text in the input box