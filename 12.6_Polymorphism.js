//Polymorphism

function add(...args){
    console.log('Argument Method');
    console.log(args);
    console.log(`Result = ${args.reduce((n1,n2)=>n1+n2)}`);
}
add(10,20)
add(10,20,30)

// OUTPUT
// Argument Method
// [ 10, 20 ]
// Result = 30
// Argument Method
// [ 10, 20, 30 ]
// Result = 60