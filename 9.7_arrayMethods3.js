//14. includes(key) : Return BOOLEAN based on the key present in the given array

nameArray=["Mini","Mani","Manju","Mihir","Mathur"]
console.log(nameArray);
//is 'Manju' is in the given array
//console.log(nameArray.some(item=>item=='Manju'));
console.log(nameArray.includes('Manju'))                                 //true




//15. indexOf(item) : return index number corresponding to the item.

console.log(`index of manju : ${nameArray.indexOf('Manju')}`);               //index of manju : 2




//remove manju from given array
//16. splice(startingIndex,delete count) : used to delete item from an array and return array with removed item.

indexManju=nameArray.indexOf('Manju')
nameArray.splice(indexManju,1)
console.log(nameArray);                                                     //[ 'Mini', 'Mani', 'Mihir', 'Mathur' ]


//16. splice(startingIndex,delete count,replacedItem) : used to delete item from an array and return array with removed item.
nameArray1=["Mini","Mani","Manju","Mihir","Mathur"]
indexManju=nameArray1.indexOf('Manju')
nameArray1.splice(indexManju,1,'Manuel')
console.log(nameArray1);                                                   //[ 'Mini', 'Mani', 'Manuel', 'Mihir', 'Mathur' ]



//17. join(separator) : return a string with array value separated using the given separator.
console.log(nameArray1.join(", "));                                        //Mini, Mani, Manuel, Mihir, Mathur

