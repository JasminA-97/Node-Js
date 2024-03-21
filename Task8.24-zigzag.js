// 24.  Write a function to perform the ZigZag conversion given a string and a number of rows.

const prompt = require('prompt-sync')();

const convertToZigZag = (s, numRows) => {
    if (numRows === 1) return s; // If only one row, return the original string
    
    const rows = new Array(numRows).fill('');
    let index = 0;
    let direction = 1; // 1: down, -1: up
    
    for (const char of s) {
        rows[index] += char;
        if (index === 0) direction = 1; // Change direction if reaching the top row
        if (index === numRows - 1) direction = -1; // Change direction if reaching the bottom row
        index += direction;
    }
    
    return rows.join('');
};

// Input from the user
const s = prompt('Enter the string: ');
const numRows = parseInt(prompt('Enter the number of rows: '));

// Output the ZigZag conversion
console.log('ZigZag conversion:', convertToZigZag(s, numRows));
