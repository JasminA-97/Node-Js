// import prompt command
const prompt = require('prompt-sync')({sigint:true})
num=prompt('entera number :')
input=num
digit=0
while(num>0){
    rem=num%10
    digit++
    num=Math.floor(num/10)
}
console.log(`Number of digits in ${input} : ${digit}`);