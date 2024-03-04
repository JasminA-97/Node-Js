
//significance of return statement                            
console.log(`\nFunction for adding 2 numbers`);
var res
function sum(num1,num2){      //fn definition
    const res=num1+num2
    //console.log(`${num1}+${num2} = ${res}`)
}
console.log(`res = ${sum(10,20)}`)      

//OUTPUT
// Function for adding 2 numbers
// res = undefined



console.log(`\nFunction for adding 2 numbers`);
function sum(num1,num2){      //fn definition
    const res=num1+num2
    // console.log(`${num1}+${num2} = ${res}`)
    return res
}
console.log(`res = ${sum(30,20)}`);
//OUtPUT
// Function for adding 2 numbers
// res = 50