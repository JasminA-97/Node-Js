//BREAK :For breaking a loop.
for (let i = 1; i < 5; i++) {
    console.log(i);
    if(i==3){
        break
    }
}
console.log(`outside loop`);

// OUTPUT
// 1
// 2
// 3
// outside loop

//CONTINUE :For skipping loop.
for (let i = 1; i < 5; i++) {
    if(i==3){
        continue
    }
    console.log(i);
}
console.log(`outside loop`);

// OUTPUT
// 1
// 2
// 4
// outside loop