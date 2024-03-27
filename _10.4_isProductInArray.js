// search a string is available in product array. it returns an array of product which include the given string; otherwise display no product available

products=[
    [1,'hide and seek',50,20],
    [2,'lAys',20,80],
    [3,'oreo',40,100],
    [4,'pArleG',25,0],
    [5,'tiger',20,30],
    [6,'unibic',60,20],
    [7,'Good dAy',70,20]
]
const prompt=require('prompt-sync')({sigint:true})
search=prompt('search for string: ')
filterArray=products.filter(prod=>prod[1].toLowerCase().includes(search.toLowerCase()))
console.log(filterArray.length>0?filterArray.map(prod=>prod[1]):'not available')

//OUTPUT
//search for string: b
// [ 'unibic' ]
