// import prompt command
const prompt = require('prompt-sync')({sigint:true})
input=prompt('Enter a number :')
num =parseInt(input);
reverseNum =""
while(input>0){
    let lastDigit = input%10
    reverseNum+=lastDigit
    input=Math.floor(input/10)
}
console.log(`Reverse :${reverseNum}`);


// OUTPUT
// Enter a number :3456
// Reverse :6543
