//Find factorial of a number

const prompt=require ('prompt-sync')({sigint:true})
input=prompt('Enter a num :')
num=input
fact=1
while(input>0){
    fact*=input
    input--
    
}
console.log(`Factorial of ${num} =${fact}`);

// OUTPUT
// Enter a num :5
// Factorial of 5 =120