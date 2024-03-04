//to find GCD of 2 numbers
//12,4
//12 :1, 12, 2, 6, 3, [[4]]
// 4 :1, [[4]], 2
//highest=GCD=4

const prompt=require('prompt-sync')({sigint:true})
input1=prompt('Enter number1 :')//6
input2=prompt('Enter number2 :')//3

gcd=1
if(input1<input2){
    //generate nos up to input1
    for(num=1; num<=input1; num++){
        if(input1%num==0 && input2%num==0){
            gcd=num
        }
    }
        console.log(`GCD(${input1},${input2}) = ${gcd}`)

}
else{
    //generate nos up to input2
    for(num=1; num<=input2; num++){
        if(input1%num==0 && input2%num==0){
            gcd=num
        }
    }
    console.log(`GCD(${input1},${input2}) = ${gcd}`)
}

// OUTPUT
// Enter number1 :12
// Enter number2 :4
// GCD(12,4) = 4


