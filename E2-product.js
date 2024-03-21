// 5. Search a string is available in the given product array,
// it return an array of product which include the given string
// otherwise display no products are available
// Example: search string= a
// output= [ 'hide and seek', 'lays', 'parleG', 'good day'] 
// Array:

const products = [
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,0],
    [5,'tiger',20,30],
    [6,'unibic',60,20],
    [7,'good day',70,20]
];

const search = 'a';

const foundProducts = products.filter(prod => 
    prod[1].toLowerCase().includes(search.toLowerCase())
).map(product => product[1]);

const result = foundProducts.length > 0 ? foundProducts : "No products are available";

console.log(result);
