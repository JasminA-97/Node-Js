const prompt = require('prompt-sync')({sigint:true})
yr=prompt('entera year :')
input=yr
if(yr%4==0){
    console.log(`Leap Year`);
}
else{
    console.log(`Not a Leap Year`);
}
