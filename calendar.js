var today = moment();
$('#currentDay').text(today.format('LL'));

var saveContent = document.querySelectorAll('#saveBtn');
var textContent = document.querySelectorAll('#inputBox');
var showList = JSON.parse(localStorage.getItem('showList') || "[]");

