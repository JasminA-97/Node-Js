//print all common numbers
p=[10,11,12,20,30]
q=[11,20,21,30,31]

for(let nump of p){
    for(let numq of q){
        if(nump==numq){
            console.log(nump);
            break
        }
    }
}

//OUTPUT
// 11
// 20
// 30