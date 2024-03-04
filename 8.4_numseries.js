//input=[4,5,6]
//output=[11,10,9]
input=[4,5,6]
sum=0;
for(let num of input){
    sum+=num
}
output=[]
for(let num of input){
    output.push(sum-num)
}
console.log(`output = ${output}`);
