// 2.  Write a program that determines the season based on the month (spring, summer, autumn, or winter).

const prompt = require('prompt-sync')({ sigint: true });

function getSeason(month) {
    month = parseInt(month);

    if (isNaN(month) || month < 1 || month > 12) {
        return "Invalid month";
    }

    const seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];
    const seasonIndex = Math.floor((month % 12) / 3);
    return seasons[seasonIndex];
}
const month = prompt('Enter the month (1-12): ');
console.log(getSeason(month));

// const prompt = require('prompt-sync')({ sigint: true });

// function getSeason(month) {
//     month = parseInt(month);

//     if (isNaN(month) || month < 1 || month > 12) {
//         return "Invalid month";
//     }

//     if (month >= 3 && month <= 5) {
//         return "Spring";
//     } else if (month >= 6 && month <= 8) {
//         return "Summer";
//     } else if (month >= 9 && month <= 11) {
//         return "Autumn";
//     } else {
//         return "Winter";
//     }
// }

// // Example usage:
// const month = prompt('Enter the month (1-12): ');
// console.log(getSeason(month));
