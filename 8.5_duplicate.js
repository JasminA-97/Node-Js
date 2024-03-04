//print all duplicate numbers
dupArray=[10,20,40,20,10,11,23]
console.log(`Duplicate numbers`);
for(i=0;i<dupArray.length;i++){
    for(j=i+1;j<dupArray.length;j++){
        if(dupArray[i]==dupArray[j]){
            console.log(dupArray[i]);
            break
        }
    
    }
}

//OUTPUT
// Duplicate numbers
// 10
// 20