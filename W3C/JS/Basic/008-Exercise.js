/** Exercise 8:
    Write a JavaScript program where the program takes a random integer between 1 to 10, 
    the user is then prompted to input a guess number. If the user input matches with guess number, 
    the program will display a message "Good Work" otherwise display a message "Not matched"
*/

let input = window.prompt("Guess the number between 1 & 10");
function guessTheNumber(input) {
  const number = Math.ceil(Math.random() * 10);
 guess === number ? console.log('Matched') : console.log(`Not matched, the number was ${number}`);
}

guessTheNumber(guess);