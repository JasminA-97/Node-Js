//1. Write a program that determines the type of a triangle based on the lengths of its sides (equilateral, isosceles, scalene, or not a triangle).

const prompt=require('prompt-sync')({sigint:true});
function triangleType(side1, side2, side3) {
    if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
        return "Not a triangle";
    } else if (side1 === side2 && side2 === side3) {
        return "Equilateral triangle";
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        return "Isosceles triangle";
    } else {
        return "Scalene triangle";
    }
}

const side1 = parseInt(prompt('enter side1 :'));
const side2 = parseInt(prompt('enter side2 :'));
const side3 = parseInt(prompt('enter side3 :'));
console.log(triangleType(side1, side2, side3)); 

