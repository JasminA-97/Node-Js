//factorial using for loop
const prompt = require('prompt-sync')({sigint:true})
input=prompt('Entera number :')
fact=1
for (let num = 1; num <=input; num++) {
   fact*=num
}
console.log(`Factorial of ${input} :${fact}`);


// OUTPUT
// Entera number :5
// Factorial of 7 :120