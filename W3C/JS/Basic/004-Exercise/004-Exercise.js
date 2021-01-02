
/** Exercise 4:
 *  Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7. 
*/

function findTriangleArea(a, b, c) {
    const p = (a + b + c) / 2;
    const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    return `The area of triangle is: ${area}`;
}

findTriangleArea(5, 6, 7);