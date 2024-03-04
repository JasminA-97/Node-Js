// * 
// *  *
// *  *  *
// *  *  *  *

for(i=1;i<=4;i++){
    row=""
    for(j=1;j<=i;j++){  //col<=row
        row+="* "
    }
    console.log(row);
}

// 1
// 2 2
// 3 3 3
// 4 4 4 4

for(i=1;i<=4;i++){
    row=""
    for(j=1;j<=i;j++){
        row+= i+" "
    }
    console.log(row);
}

// 1
// 1 2
// 1 2 3
// 1 2 3 4

for(i=1;i<=4;i++){
    row=""
    for(j=1;j<=i;j++){  
        row+= j+" "
    }
    console.log(row);
}
