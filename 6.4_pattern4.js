//Print HOLLOW PYRAMID
//          *
//        *   *
//      *   *   *
//    *   *   *   *

for(i=1;i<=4;i++){
    row=" "
    for(j=1;j<=7;j++){
        if((i==4) || (i+j == 5) || (j-i==3)){
           row+="*"
        }else{
            row+= " "
     }
    }
    console.log(row);
}

