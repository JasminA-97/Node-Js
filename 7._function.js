console.log(`Function for adding 2 numbers`);
sum(40,60)                    // Hoisted
function sum(num1,num2){      //fn definition
    var res=num1+num2
    console.log(`${num1}+${num2} = ${res}`)
}
sum(10,20)                    //fn call

//OUTPUT
// Function for adding 2 numbers
// 40+60 = 100
// 10+20 = 30

