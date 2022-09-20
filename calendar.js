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
})