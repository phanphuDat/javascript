// * start date

/**
 * ! day of the week:
 *  @type 0: Sunday, 1: Monday, 2: Tuesday, 3: Wednesday, 4: Thursday, 5: Friday, 6: Saturday, 7: Saturday
 * ! hours 
 *  @type 0 -> 23
 * 
 */

let date = new Date();
console.log("year:" + " " + date.getFullYear());
console.log("month:" + " " + date.getMonth() + 1);
console.log("date of month:" + " " + date.getDate());
var days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
var day = date.getDay();
console.log(days[day]);
var hours = date.getHours();
var response = hours < 12 ? "AM" : "PM";
hours = hours < 12 ? hours + response : 24 - 12 + response;
console.log(hours);

var response = hours >= 12 ? "PM" : "AM";
hours = hours >= 12 ? hours - 12 : hours;
console.log(hours);

// * end date

const random = Math.random();
