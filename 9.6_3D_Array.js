numArray=[
    [10,50,[9,25]],[2,30],[34,5],[67,78],[90,28]
]

//flat : return array with corresponding depth as dimension
//       reduce dimension by 1
//       newArray=numArray.flat(depth)
//          eg:newArray=numArray.flat(1) : reduces to 1D Array, if it is 2D array
//          eg:newArray=numArray.flat(2) : reduces to 1D Array, if it is 3D array
//          eg:newArray=numArray.flat(infinity) : reduces to 1D Array, from any dimension
newArray=numArray.flat(Infinity)
console.log(newArray);

//all nums > 50
console.log(`all nums > 50`);
console.log(newArray.filter(num=>num>50));

//squares of each number
console.log(`squares of each number`);
console.log(newArray.map(num=>num**2))

//total sum of all nums
console.log(`total sum of all nums`);
console.log(newArray.reduce((n1,n2)=>n1+n2));

//highest number
console.log(`highest number`);
console.log(newArray.reduce((n1,n2)=>n1>n2?n1:n2));

//OUTPUT
// [
//     10, 50, 9, 25,  2,
//     30, 34, 5, 67, 78,
//     90, 28
//   ]
//   all nums > 50
//   [ 67, 78, 90 ]
//   squares of each number
//   [
//      100, 2500,   81, 625,
//        4,  900, 1156,  25,
//     4489, 6084, 8100, 784
//   ]
//   total sum of all nums
//   428
//   highest number
//   90