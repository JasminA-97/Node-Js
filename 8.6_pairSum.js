//print pairs whose sum=6
pairSumArray=[2,3,4,5,1]
console.log(`Pair sum numbers`);
for(i=0;i<pairSumArray.length;i++){
    for(j=i+1;j<pairSumArray.length;j++){
        if(pairSumArray[i]+pairSumArray[j]==6){
            console.log(pairSumArray[i],pairSumArray[j]);
            break
        }
    
    }
}

//OUTPUT
// Pair sum numbers
// 2 4
// 5 1