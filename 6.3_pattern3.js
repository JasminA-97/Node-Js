//          *
//        *   *
//      *   *   *
//    *   *   *   *

for(r=1;r<=4;r++){
    row=""
    for(s=3;s>=r;s--){
        row+="  "
    }
    for(c=1;c<=r;c++){
        row+="   *"
    }
    console.log(row);
}
