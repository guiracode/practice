
/** Exercise 9:
    9. Write a JavaScript program to calculate days left until next Christmas. 
*/

function daysUntilChristmas() {
    const today = new Date();
    const oneDay = 1000 * 60 * 60 * 24;
    const christmasDay = new Date(today.getFullYear(), 11, 25);

    if (today.getMonth() === 11 && today.getDate() > 25) {
        christmasDay.setFullYear(christmasDay.getFullYear() + 1);
    }

    return `${Math.ceil((christmasDay.getTime()-today.getTime())/(oneDay))} - days left until Christmas!`
}


daysUntilChristmas();