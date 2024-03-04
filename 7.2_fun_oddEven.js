//To check  a num is odd or even using function

const prompt=require('prompt-sync')({sigint:true})

function oddEven(input){
    return input % 2 == 0 ? 'Even' :'Odd'
    }
const input=prompt('enter a num : ')
console.log(`Number ${input} is ${oddEven(input)}`);

//OUTPUT
// enter a num : 85
// Number 85 is Odd
