//Check armstrong or not

const prompt=require('prompt-sync')({sigint:true})
sum=0
input=prompt('Enter a number : ')
num=input
while(input>0){
    last=input%10
    sum += last**3
    input=Math.floor(input/10)
}
console.log("Sum of cubes of digit : ",sum);
console.log(num==sum?'Armstrong\n':'Not armstrong\n');

// OUTPUT
// Enter a number : 356
// Sum of cubes of digit :  368
// Not armstrong

// Enter a number : 371
// Sum of cubes of digit :  371
// Armstrong
