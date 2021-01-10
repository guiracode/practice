
/** Exercise 7:
    Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050. 
*/


function findFirstSunday(){
    for(let y = 2014; y <= 2050; y++) {
        let d = new Date(y, 0, 1);
        if (d.getDay() === 0) {
            console.log(`January 1st falls on a Sunday in ${y}`)
        }
    }
}

findFirstSunday();