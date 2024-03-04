// before  : x=20 y=30
// swapped : x=30 y=20
var x=20 
var y=30
console.log(`before swapping : x = ${x}, y = ${y}`);
var z;
z=x;
x=y
y=z
console.log(`After swapping  :  x = ${x}, y = ${y}\n`);
//before swapping : x = 20, y = 30
//After swapping  :  x = 30, y = 20

//method 2
a=2
b=4
console.log(`before swapping : a = ${a}, b = ${b}`);
c=a+b
a=c-a;
b=c-b;
console.log(`after swapping :  a = ${a}, b = ${b}`);





