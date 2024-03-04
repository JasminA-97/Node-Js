//To find cube of a number using function
const prompt=require('prompt-sync')({sigint:true})
function cube(num){
    return num ** 3
}
num=prompt('Enter a num : ')
console.log(`Cube of ${num} : ${cube(num)}`);


//OUTPUT
// Enter a num : 3
// Cube of 3 : 27

