//find second largest number and sort the numbers in ascending order
a=1
b=20
c=35
  
//second largest

if(a>b && a>c){
    console.log(`\nsecond largest=` ,b>c ? b  : c);
}
else if (b>a && b>c){
    console.log(`\nsecond largest=` ,a>c ? a  : c);
}
else{
    console.log('\nsecond largest=' ,a>b ? a  : b);
}

//ascending order
if(a>b && a>c){
    largest=a;
    if(b>c){
        middle=b;
        lowest=c;
    }
    else{
        middle=c;
        lowest=b;
    }
}
else if(b>c && b>a){
    largest=b;
    if(c>a){
        middle=c;
        lowest=a;
    }
    else{
        middle=a;
        lowest=c;
    }   
}
else{
    largest=c;
    if(a>b){
        middle=a;
        lowest=b;
    }
    else{
        middle=b;
        lowest=a;
    }
}
console.log(`ascending= `,lowest,middle,largest);

//OUTPUT
// second largest= 20
// ascending=  1 20 35