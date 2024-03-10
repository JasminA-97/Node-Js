//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,0],
    [5,'tiger',20,30],
    [6,'unibic',60,20],
    [7,'good day',70,20]
]

//1. display all product name
console.log('-----------------display all product name-----------------');
products.forEach(p=>console.log(p[1]))

//2. display product whose price < Rs.50
console.log('-----------------display product whose price < Rs.50-----------------');
products.filter(item=>item[2]<50).forEach(item=>console.log(item[1]))

//3. print price of oreo
console.log('-----------------print price of oreo-----------------');
console.log(products.find(item=>item[1]=='oreo')[2])

//4. print costly product name
console.log('-----------------print costly product name-----------------');
console.log(products.reduce((p1,p2)=>p1[2]>p2[2]?p1:p2)[1])

//5. display out of stock product
console.log('-----------------display out of stock product-----------------');
products.filter(item=>item[3]==0).forEach(item=>console.log(item[1]))

//6. sort products based on stock in decsending order
console.log('-----------------sort products based on stock in decsending order-----------------');
products.sort((p1,p2)=>p2[3]-p1[3]).forEach(item=>console.log(item[1]))

//7. print product having maximum available stock
console.log(`-----------------product having maximum available stock ----: ${products.reduce((p1,p2)=>p1[3]>p2[3]?p1:p2)[1]}`);

//8. is there any product can be purchased by Rs. 10
console.log(`-----------------is there any product can be purchased by Rs. 10---- :${products.some(p=>p[2]<=10)?'Yes':'No'}`)


//9. Is there any product in the range of 10 to 30
console.log(`-----------------Is there any product in the range of 10 to 30 :---- ${products.some(p=>p[2]>=10&&p[2]<=30)?'Yes':'No'}`)

//10. print all products in the range of 10 to 30
console.log('-----------------print all products in the range of 10 to 30-----------------');
products.filter(p=>p[2]>=10&&p[2]<=30).forEach(item=>console.log(item[1]))


//OUTPUT
// -----------------display all product name-----------------
// hide and seek
// lays
// oreo
// parleG
// tiger
// unibic
// good day
// -----------------display product whose price < Rs.50-----------------
// lays
// oreo
// parleG
// tiger
// -----------------print price of oreo-----------------
// 40
// -----------------print costly product name-----------------
// good day
// -----------------display out of stock product-----------------
// parleG
// -----------------sort products based on stock in decsending order-----------------
// oreo
// lays
// tiger
// hide and seek
// unibic
// good day
// parleG
// -----------------product having maximum available stock ----: oreo
// -----------------is there any product can be purchased by Rs. 10---- :No
// -----------------Is there any product in the range of 10 to 30 :---- Yes
// -----------------print all products in the range of 10 to 30-----------------
// lays
// tiger
// parleG