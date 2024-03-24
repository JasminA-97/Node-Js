//print word count
sentence="hai all hello hai welcome to js"

output={}
sentence.split(" ").forEach(word=>output.hasOwnProperty(word)?output[word]+=1:output[word]=1)
console.log(output);

//{ hai: 2, all: 1, hello: 1, welcome: 1, to: 1, js: 1 }