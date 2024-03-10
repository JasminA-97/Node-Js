numArray=[10,11,23,45,30,26]

//print all numbers >25
const res=numArray.filter(num=>num>25)  
console.log(res);                                //[ 45, 30, 26 ]


//print all even num
console.log(numArray.filter(num=>num%2==0));    //[ 10, 30, 26 ]


//display square of each number in new array by applying a fn in the given array
const squareOutput=numArray.map(num=>num**2)
console.log(squareOutput);                       //[ 100, 121, 529, 2025, 900, 676 ]


//create a new array satisfying the following condition
//1.if num<25, then increment the num else decrement the num.
//[output]=[11,12,24,44,29,25]
const output=numArray.map(num=>num<25?num+1:num-1)
console.log(output);                             //[ 11, 12, 24, 44, 29, 25 ]


//display smallest number
const smallest=numArray.reduce((num1,num2)=>num1<num2?num1:num2);
console.log(`smallest=${smallest}`);             //smallest=10


//display largest number
const largest=numArray.reduce((num1,num2)=>num1>num2?num1:num2);
console.log(`largest=${largest}`);                  //largest=45


//display total sum
console.log(`sum = ${numArray.reduce((num1,num2)=>num1+num2)}`);    //sum = 145

