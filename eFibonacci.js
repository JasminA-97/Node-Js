// import prompt command
const prompt = require('prompt-sync')({sigint:true})
input=prompt('entera number :')
f1=0
f2=1
if(input==0){
    console.log(`series empty`);}
else if(input==1){
        console.log(`${f1}`);}    
else if(input==2){
    console.log(`${f1}\n${f2}`);}
else {
console.log(`${f1}\n${f2}`);
var f3
i=3
while(i<=input){

    f3=f1+f2
    console.log(`${f3}`);
    f1=f2
    f2=f3
    i++
}
}