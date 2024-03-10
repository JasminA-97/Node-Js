//Find if a given triangle is Equilateral,Isosceles or Scalene
const prompt = require('prompt-sync')({sigint:true})

num1=prompt('enter side 1 :');
num2=prompt('enter side 2 :');
num3=prompt('enter side 3 :');
 
if(num1==num2==num3){
    console.log(`Equilateral`);
}
else if((num1==num2)||(num2==num3)||(num1==num3)){
    console.log(`Isosceles`);
}
else{
    console.log(`Scalene`);
}