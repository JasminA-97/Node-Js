//[ id,name,designation,location,salary,experience]
employee = [
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',15000,2],
    [1002,'Maxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

//1. print all employee name
console.log('\nprint all employee name');
// for(let emp of employee){
//         console.log(emp[1]);
//     }
employee.forEach(emp =>console.log(emp[1]));



//2.print total number of employee
console.log('\nprint total number of employee');
console.log(employee.length);



//3. print developer employee details
console.log('\nprint developer employee details');
// for(let emp of employee){
//     if(emp[2]=='developer'){
//         console.log(emp[1])
//     }
// }
employee.filter(emp=>emp[2]=='developer').forEach(emp=>console.log(emp[1]))



//4. print employee whose salary > 30000
console.log('\nprint employee whose salary > 30000');
// for(let emp of employee){
//     if(emp[4]>30000){
//         console.log(emp[1])
//     }
// }
employee.filter(emp=>emp[4]>3000).forEach(emp=>console.log(emp[1]))

//5. print details of employee Laisha
 console.log('\nprint details of employee Laisha');
// for(let emp of employee){
//     if(emp[1]=='Laisha'){
//         console.log(emp)
//     }
// }
const empLaisha=employee.find(emp=>emp[1]=='Laisha')
console.log(`\n
Employee Id : ${empLaisha[0]}
Employee Name :  ${empLaisha[1]}
Employee Designation :  ${empLaisha[2]}`);


//6. Sort employee based on their salary in descending order
console.log('\nSort employee based on their salary in descending order');
employee.sort((emp1,emp2)=>(emp2[4] -emp1[4]))
console.log(employee);


//7. Sort employee based on their experience in ascending order
console.log('\nSort employee based on their experience in ascending order');
employee.sort((n1,n2)=>n1[5]-n2[5])
console.log(employee);



//OUTPUT

// print all employee name
// Neel
// Max
// Maxwell
// Vyom
// Laisha
// Aahan
// Aahil
// Shayan
// Nihaan

// print total number of employee
// 9

// print developer employee details
// Neel
// Aahan
// Shayan
// Nihaan

// print employee whose salary > 30000
// Neel
// Max
// Maxwell
// Vyom
// Laisha
// Aahan
// Aahil
// Shayan
// Nihaan

// print details of employee Laisha
// [ 1004, 'Laisha', 'tester', 'TVM', 55000, 7 ]

// Sort employee based on their salary in descending order
// [
//   [ 1004, 'Laisha', 'tester', 'TVM', 55000, 7 ],
//   [ 1003, 'Vyom', 'QA', 'kochi', 45000, 5 ],
//   [ 1002, 'Maxwell', 'QA', 'kochi', 35000, 4 ],
//   [ 1007, 'Shayan', 'developer', 'kochi', 30000, 3 ],
//   [ 1000, 'Neel', 'developer', 'kochi', 25000, 3 ],
//   [ 1008, 'Nihaan', 'developer', 'TVM', 25000, 3 ],
//   [ 1006, 'Aahil', 'QA', 'kochi', 20000, 2 ],
//   [ 1001, 'Max', 'tester', 'TVM', 15000, 2 ],
//   [ 1005, 'Aahan', 'developer', 'TVM', 15000, 1 ]
// ]

// Sort employee based on their experience in ascending order
// [
//   [ 1005, 'Aahan', 'developer', 'TVM', 15000, 1 ],
//   [ 1006, 'Aahil', 'QA', 'kochi', 20000, 2 ],
//   [ 1001, 'Max', 'tester', 'TVM', 15000, 2 ],
//   [ 1007, 'Shayan', 'developer', 'kochi', 30000, 3 ],
//   [ 1000, 'Neel', 'developer', 'kochi', 25000, 3 ],
//   [ 1008, 'Nihaan', 'developer', 'TVM', 25000, 3 ],
//   [ 1002, 'Maxwell', 'QA', 'kochi', 35000, 4 ],
//   [ 1003, 'Vyom', 'QA', 'kochi', 45000, 5 ],
//   [ 1004, 'Laisha', 'tester', 'TVM', 55000, 7 ]
// ]