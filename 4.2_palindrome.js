//Palindrome or not

const prompt=require('prompt-sync')({sigint:true})
rev=""
input=prompt('Enter a number :')
num=input
while(input>0){
    last=input%10
    rev+= last
    input=Math.floor(input/10)
}
console.log("Reverse :",rev);
console.log(num==rev?'Palindrome':'Not palindrome');

// OUTPUT
// Enter a number :797
// Reverse : 797
// Palindrome

// Enter a number :569
// Reverse : 965
// Not palindrome