//Display all numbers whose exponents are in the given range
//if((8<=output) && (output<=36))
//input exponent=2
//output 3,4,5,6

const prompt=require('prompt-sync')({sigint:true})
i=Math.floor(8/6)
f=Math.floor(36/6)
exp=2
while(i<=f){
    // console.log(i);
    output=i**exp
    // console.log(output);
    if((8<=output) && (output<=36)){
        console.log(i);
    }  
    i++
}


