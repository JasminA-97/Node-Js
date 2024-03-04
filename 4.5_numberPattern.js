//input   1         2          3            4
//output  1         24         369          4936

//logic  1*1        2*12        3*123       4*1234

const prompt=require('prompt-sync')({sigint:true})
input=prompt('Enter any number : ')//4
num=input
n=1
str=" "
while(n<=num){
    str+=n;
    n++
}
//console.log(str)     1234
console.log('output=',input*str)

// OUTPUT
// Enter any number : 4
// output= 4936