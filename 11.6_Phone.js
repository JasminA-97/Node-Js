// Task
products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

//1. print product name only
console.log(`----1. print product name only----`);
products.forEach(prod=>console.log(prod.pName))

//2. print all mobile details whose display is lcd
console.log(`----2. print all mobile details whose display is lcd----`);
products.filter(prod=>prod.display=='lcd').forEach(prod=>console.log(prod.pName))

//3. print 5g mobile phone name
console.log(`----3. print 5g mobile phone name----`);
products.filter(prod=>prod.band=='5g').forEach(prod=>console.log(prod.pName))

//4. filter mobile based on price
console.log(`----4. filter mobile based on price----`);
products.sort((p1,p2)=>p2.price-p1.price).forEach(item=>console.log(item.pName,'-',item.price))

//5. print costly mobile
console.log(`----5. print costly mobile----`);
a=products.reduce((p1,p2)=>p1.price>p2.price?p1:p2).pName
console.log(a);

//6. print low cost mobile
console.log(`----6. print low cost mobile----`);
console.log(products.reduce((p1,p2)=>p1.price<p2.price?p1:p2).pName);

// ----1. print product name only----
// apple
// samsaung
// blackberry
// nokia
// motorola

// ----2. print all mobile details whose display is lcd----
// nokia
// motorola

// ----3. print 5g mobile phone name----
// apple
// samsaung

// ----4. filter mobile based on price----
// apple - 120000
// blackberry - 50000
// samsaung - 45000
// motorola - 10000
// nokia - 1200

// ----5. print costly mobile----
// apple

// ----6. print low cost mobile----
// nokia