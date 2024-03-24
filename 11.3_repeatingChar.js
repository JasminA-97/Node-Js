//Task 1
//find the first recursive character from the given pattern="ABBCCBAD"
//ans: A
pattern="ABBCCBAD"

output={}
charArray=pattern.split("")
for (let char of charArray ) {
    if(output.hasOwnProperty(char)){
        console.log(` first recursive character: ${char}`);
        break;
    }else{
        output[char]=1
    }
}

// first recursive character: B