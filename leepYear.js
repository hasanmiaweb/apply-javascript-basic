//Leap Year Calculator By Hasanmiaweb
function leapYear(year) {
  if (year % 400 == 0 || (year % 4 == 0 && year % 100 !== 0)) {
    console.log("a leap year.");
  } else {
    console.log("not a leap year.");
  }
}
leapYear();
