// 8.  Write a program to print Pascal's Triangle up to a certain number of rows (entered by the user).

const prompt = require('prompt-sync')();

// Function to print Pascal's Triangle
function printPascalsTriangle(rows) {
    const maxDigits = pascalNumber(rows - 1, Math.floor(rows / 2)).toString().length; // Calculate maximum number of digits in the triangle
    for (let i = 0; i < rows; i++) {
        const indentation = ' '.repeat((rows - i - 1) * (maxDigits + 1) / 2); // Adjust indentation based on row index
        let output = '';
        for (let j = 0; j <= i; j++) {
            const num = pascalNumber(i, j);
            output += num.toString().padStart(maxDigits, ' ') + ' '.repeat(maxDigits); // Adjust spacing for readability
        }
        console.log(indentation + output);
    }
}

// Function to calculate Pascal's Triangle number
function pascalNumber(row, column) {
    if (column === 0 || column === row) {
        return 1;
    } else {
        return pascalNumber(row - 1, column - 1) + pascalNumber(row - 1, column);
    }
}

// Input from the user
const numberOfRows = parseInt(prompt('Enter the number of rows for Pascal\'s Triangle: '));

// Print Pascal's Triangle in the shape of an isosceles triangle
console.log("Pascal's Triangle with", numberOfRows, "rows:");
printPascalsTriangle(numberOfRows);
