
/** Exercise 3:
    3. Write a JavaScript program to get the current date. 
    Expected Output :
    mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/


// My Solutions:
function formatCurrentDate() {
    const date = new Date();
    let mm = date.getMonth(),
        dd = date.getDate(),
        yyyy = date.getFullYear();
    let month = mm < 10 ? '0' + mm : mm;
    let day = dd < 10 ? '0' + dd : dd;

    return `${month}-${day}-${yyyy}, ${month}/${day}/${yyyy} or ${day}-${month}-${yyyy}, ${day}/${month}/${yyyy}`;      
}

formatCurrentDate();