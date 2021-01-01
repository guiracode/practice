
/** Exercise 1:
 *  1. Write a JavaScript program to display the current day and time in the following format.  
    Sample Output : Today is : Tuesday.
    Current time is : 10 PM : 30 : 38
*/



// My Solutions:
function displayTime() {
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date(),
          hours = date.getHours(),
          minutes = date.getMinutes(),
          seconds = date.getSeconds(),
          day = week[date.getDay()];
    const PM_AM = hours >= 12 ? 'PM' : 'AM';

    return `Today is : ${day}.\nCurrent time is : ${hours} ${PM_AM}: ${minutes} : ${seconds}`;
}

displayTime();