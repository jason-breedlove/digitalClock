setInterval(digitalClock, 1000);

function digitalClock() {
// create date object and assign methods
let months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let todayTime = new Date();
let currentDate = todayTime.getDate();
let currentDay = days[todayTime.getDay()];
let currentMonth = months[todayTime.getMonth()];
let currentYear = todayTime.getFullYear();



let currentHour = todayTime.getHours();
let currentMinute = todayTime.getMinutes();
let currentSecond = todayTime.getSeconds();

currentSecond = (currentSecond < 10 ? "0" : "") + currentSecond;
currentMinute = (currentMinute < 10 ? "0" : "") + currentMinute;
currentHour = (currentHour < 10 ? "0" : "") + currentHour;
currentDate = (currentDate < 10 ? "0" : "") + currentDate;

if (currentDate === 1) {
  currentDate = currentDate + "st";
} else if (currentDate === 2) {
  currentDate = currentDate + "nd";
} else if (currentDate === 3) {
  currentDate = currentDate + "rd";
} else {
  currentDate = currentDate + "th";
}

document.getElementById("digitalClock").innerHTML = currentHour + ":" + currentMinute + ":" +  currentSecond+ " ";
document.getElementById("date").innerHTML = currentDay + ", " + currentMonth + " " + currentDate + " " + currentYear;
}
digitalClock();