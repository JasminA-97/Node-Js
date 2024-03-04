a=1
b=20
c=35

//  console.log(a>b && a>c ? "a is greater": b>a && b>c ? "b is greater" : "c is greater");

// greatest of 3 numbers
//  if(a>b && a>c){
//        console.log(a);}
// else if(b>a && b>c){
//         console.log(b);}
// else{
//     console.log(c);}

//second largest
// if(a>b && a>c)
//     if(b>c)
//         console.log(`num 2 is second largest`);
//     else
//         console.log(`num 3 is second largest`);
// else if(b>c && b>a)
//     if(a>c)
//         console.log(`num 1 is second largest`);
//     else
//         console.log(`num 3 is second largest`);
// else if(a>b){
//     console.log(`num 1 is second largest`);}
// else{
//     console.log(`num 2 is second largest`)    

// }    

console.log(`second largest`);

if(a>b && a>c){
    console.log(`\nsecond largest=` ,b>c ? b  : c);
}
else if (b>a && b>c){
    console.log(`\nsecond largest=` ,a>c ? a  : c);
}
else{
    console.log('\nsecond largest=' ,a>b ? a  : b);
}

console.log(`\nascending order`);
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





