//let keyword 
//has block scope

let i=10
console.log(`initially, i=`+i) 
for(let i=1;i<=5;i++){                  //OUTPUT
    console.log(`inside loop, i=`+i);   // inside loop, i=1
}                                       // inside loop, i=2
                                        // inside loop, i=3
                                        // inside loop, i=4
                                        // inside loop, i=5          

console.log(`outside loop, i=`+i);      //i is not defined (if let i=10 is not given initially)
                                        //outside loop, i=10
