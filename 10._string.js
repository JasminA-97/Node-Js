// - String : Array of characters
//     - Methods
//         1- substring() : -Returns the substring at the specified location within a String object
//                          -ending index is not inclueded

//         2- toLowerCase() : Converts all the alphabetic characters in a string to lowercase.

//         3- toUpperCase() : Converts all the alphabetic characters in a string to uppercase.

//         4- startsWith()

//         5- endsWith()

//         6- trim() : Removes the leading and trailing white space and line terminator characters from a string.

//         7- includes(key) : Returns true if key is included in the range, and false otherwise.

//         8- split() : -it returns an array
//                      -split(" ") for splitting word by word
//                      -split("") for splitting character by character

//         9- slice() : -similar to substring()
//                      -last index data is not included
//                      -(-ve)indexing is allowed
//                      -(-1)removes last index item

lnguage=' c + +'
console.log(lnguage.length); //6

language="Java script"
//       [012345678910]
console.log(language.substring(0,6)); //Java s

lower=language.toLowerCase()
console.log(lower); //java script

upper=language.toUpperCase()
console.log(upper); //JAVA SCRIPT

console.log(language.startsWith('ja')); //false

console.log(language.endsWith('pt')); //true

str= ' ore o. '
console.log(str.trim()); //ore o.

console.log(language.includes('pt')); //true

console.log(language.split(' ')); //[ 'Java', 'script' ]

console.log(language.split('')); //[
                                 //     'J', 'a', 'v', 'a',
                                 //     ' ', 's', 'c', 'r',
                                 //     'i', 'p', 't'
                                 //   ]

console.log(language.slice(0,2)); //Ja 
console.log(language.slice(0,-2)); //Java scri                     