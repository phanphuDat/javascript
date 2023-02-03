/**
 * ? 1. display the current day and time in the following format :
 *  ? today is: thursday
 *  ? Current time is: 12 PM : 02 : 00
 */

// ! START 1

const today = new Date();
const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
const day = days[today.getDay()];
console.log("Today is: " + day);

var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
var response = hours >= 12 ? "PM" : "AM";
hours = hours >= 12 ? hours - 12 : hours;
if (hours === 0 && response === "PM") {
  if (minutes === 0 && seconds === 0) {
    hours = 12;
    response = "Noon";
  } else {
    hours = 12;
    response = "PM";
  }
}
if (hours === 0 && response === "AM") {
  if (minutes === 0 && seconds === 0) {
    hours = 12;
    response = "Midnight";
  } else {
    hours = 0;
    response = "AM";
  }
}
console.log(
  "Current time is: " + hours + response + " : " + minutes + " : " + seconds
);

// ! END EXERCISE 1 HERE

/**
 * ? 2. write a javascript program to print the contents of the current window :
 *
 */

// ! START 2

const demoClick = document.getElementById("demoClick");
demoClick.onclick = function print_current_page() {
  window.print();
};

// ! END EXERCISE 2 HERE

/**
 * ? 2. write a javascript program to get the current date :
 *  ? output: mm-dd-yyyy, dd-mm-yyyy
 */

// ! START 3

// * END EXERCISE 3 HERE
