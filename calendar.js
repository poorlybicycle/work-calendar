//Displays current date in the jumbotron
var today = moment();
$('#currentDay').text(today.format('LL'));

var saveContent = document.querySelectorAll('#saveBtn');
var textContent = document.querySelectorAll('#inputBox');
var showList = JSON.parse(localStorage.getItem('showList') || "[]");

var currentDate = new Date();
var currentHour = currentDate.getHours();

const rows = document.getElementsByClassName("row");

//For each row (timeblock), make the time an integer to compare to later.
Array.from(rows).forEach(row => {
    let
        rowIdString = row.id,
        rowHour;
    if (rowIdString) {
        rowHour = parseInt(rowIdString);
    }

    if (rowHour) {
        //If the current time is equal to the row's time, make the row red (indicates present)
        if (currentHour === rowHour) {
            setColor(row, 'red');

        //If current time is greater than the row time, the row is green (indicates future)
        } else if ((currentHour > rowHour)){
            setColor(row, 'green');

        //If current time is earlier than the row time, the row is gray (indicates past)
        } else if ((currentHour < rowHour)){
            setColor(row,'lightgrey');

        } else {
            setColor(row,'white');
        }
    }
});