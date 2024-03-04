//To count down numbers from 4 to 1
function countDown(num){
    console.log(num);
    let newnum=num-1
    if(newnum>0){
    countDown(newnum)}
}
countDown(4)


// OUTPUT
// 4
// 3
// 2
// 1


//using arrow fn
// const countDown=num=>{
//     console.log(num);
//     let newnum=num-1
//     if(newnum>0){
//     countDown(newnum)}
// }
// countDown(4)