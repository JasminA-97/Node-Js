//Conditional statements :
    //IF
    //IF ELSE
    //ELSE IF LADDER

console.log(`\n-----------IF------------`);
//-------if--------------
//to check a number less than 10, then print that num with a msg
num=4
if(num < 10){
    console.log(`given num ${num}, is less than 10\n`);
}



console.log(`---------IF-ELSE---------`);
//--------if-else-------------
//To check if a person is eligible for voting
age=18
if(age >= 18){
    console.log(`Eligible for voting\n`);
}
else{
    console.log(`Not eligible for voting \n`);
}



console.log(`------ELSE-IF-LADDER-----`);
//to check a num is positive or not
a = 0
if(a > 0){
    console.log(`Positive\n`)
}
else if(a < 0){
    console.log(`Negative\n`)
}
else{
    console.log(`Zero\n`)
  
}




console.log(`-----------------`);
//to print largest among two numbers
a = 101
b = 100
if ( a > b){
    console.log(`${a} is greater\n`)
}
else if ( b > a){    
    console.log(`${b} is greater\n`)
}
else{
    console.log(`same number\n`)
}


console.log(`-----------------`);
//print fizz when a num is divisible by 3, buzz when divisible by 5, fizzbuzz  when divisible by 15
num = 80 
if(num % 15 == 0){
    console.log(`fizzbuzz`);
}
else if(num % 5 == 0){
    console.log(`fizz`);
}
else if(num % 3== 0){
    console.log(`buzz`);
}
else{
    console.log(`nothing to print`);
}


//OUTPUT
// -----------IF------------
// given num 4, is less than 10

// ---------IF-ELSE---------
// Eligible for voting

// ------ELSE-IF-LADDER-----
// Zero

// -----------------
// 101 is greater

// -----------------
// fizz