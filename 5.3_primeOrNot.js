const prompt=require('prompt-sync')({sigint:true})
num=prompt('Enter a number :')
flag=1
//finding factors
for(i=2;i<=Math.ceil(num/2);i++){
    if(num%i == 0){
        flag=0
        break
    }
}
console.log(flag==0 ? 'Not prime':'Prime');


// OUTPUT
// Enter a number :7
// Prime
