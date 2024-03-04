x=10
y=3

// modulus
console.log(`\n${x} % ${y} = ${x % y}`)

// power
result=x**y
console.log(`\n${x} ** ${y} = ${result}`)

// relational
console.log(`\ncheck x < y : ${x < y}`)
console.log(`check x >= y : ${x >= y}`)

p=10
q='10'

// == only checks value
console.log(`\ncheck p==q : ${p==q}`)

// === checks value and type too
console.log(`\ncheck p===q : ${p===q}`)

// check p=q : 10
console.log(`\ncheck p=q : ${p=q}`)


// LOGICAL OPERATORS
// &&
console.log(`\ncheck 5 < x < 7: ${5 < x &&  x < 7}`);
// !
empstatus=false
console.log(`\n!empstatus : ${!empstatus}`)

// INCREMENT/ DECREMENT
// post increment
r=20
console.log(`\nbefore applying increment : ${r}`);  // before applying increment : 20
console.log(`after applying increment : ${r++}`);   // after applying increment : 20
console.log(`r = : ${r}`);                          // r = : 21

// pre increment
r=20
console.log(`\nbefore applying increment : ${r}`);   // before applying increment : 20
console.log(`after applying increment : ${++r}`);    // after applying increment : 21
console.log(`r = : ${r}`);                           // r = : 21

// short-hand
z=20
console.log(`\nz += 30 : ${z += 30}`);


//OUTPUT

// 10 % 3 = 1

// 10 ** 3 = 1000

// check x < y : false
// check x >= y : true

// check p==q : true

// check p===q : false

// check p=q : 10

// check 5 < x < 7: false

// !empstatus : true

// before applying increment : 20
// after applying increment : 20
// r = : 21

// before applying increment : 20
// after applying increment : 21
// r = : 21

// z += 30 : 50










