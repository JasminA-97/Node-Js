accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    }
]

//1. total number of accounts
console.log(`1.Total number of accounts :${accounts.length}`);

//2. print account number whose ac_type is savings
console.log(`-----------2. print account number whose ac_type is savings-----------`);
accounts.filter(accdetails=>accdetails.ac_type==='savings').forEach(item=>console.log(item.acno))
    

//3. print the balance of accnount number 1000
console.log(`-----------3. print the balance of accnount number 1000-----------`);
console.log(`${accounts.find(accdetails=>accdetails.acno==1000).balance}`)

//4. print all gpay transactions
console.log(`-----------4. print all gpay transactions-----------`);
console.log(accounts.map((accdetails)=>accdetails.transaction).flat(Infinity).filter(item=>item.mode=='gpay'))

//5. print all transaction whose amount > 5000
console.log(`-----------5. print all transaction whose amount > 5000-----------`);
console.log(accounts.map(accdetails=>accdetails.transaction).flat(Infinity).filter(item=>item.amount>5000))

//6. print credit transaction of account 1002
console.log(`-----------6. print credit transaction of account 1002-----------`);
credTrnsctn1002=accounts.map(accdetails=>accdetails.transaction).flat(Infinity).filter(item=>item.to==1002)
console.log(credTrnsctn1002);

//7. print total credited amount to 1002
console.log(`-----------7. print total credited amount to 1002-----------`);
credAmt1002=credTrnsctn1002.map(accdetails=>accdetails.amount).reduce((a1,a2)=>a1+a2)
console.log(credAmt1002);

//8. print debit transaction of account 1002
console.log(`-----------8. print debit transaction of account 1002-----------`);
debitTrnsctn1002=accounts.find(accdetails=>accdetails.acno==1002).transaction
console.log(debitTrnsctn1002);

//9. print total debited amount from 1002
console.log(`-----------9. print total debited amount from 1002-----------`);
debitAmt1002=debitTrnsctn1002.map(accdetails=>accdetails.amount).reduce((a1,a2)=>a1+a2)
console.log(debitAmt1002);

//10. print transaction history of 1002
console.log(`-----------10. print transaction history of 1002-----------`);
transactnHistory1002=[...credTrnsctn1002,...debitTrnsctn1002]
console.log(transactnHistory1002);

//11. print current balance of 1002
console.log(`-----------11. print current balance of 1002-----------`); 
currentBal1002=accounts.find(accdetails=>accdetails.acno==1002).balance + credAmt1002
console.log(currentBal1002);

//12. print highest balance account details
console.log(`-----------12. print highest balance account details-----------`); 
highest=accounts.reduce((acc1,acc2)=>acc1.balance>acc2.balance?acc1:acc2)
console.log(`account ${highest.acno} has the highest balance of ${highest.balance}`)


//OUTPUT
// 1.Total number of accounts :4

// -----------2. print account number whose ac_type is savings-----------
// 1000
// 1003

// -----------3. print the balance of accnount number 1000-----------
// 45000

// -----------4. print all gpay transactions-----------
// [
//   { to: 1001, amount: 5000, msg: 'ebill', mode: 'gpay' },
//   { to: 1000, amount: 1000, msg: 'grossary', mode: 'gpay' },
//   { to: 1000, amount: 5000, msg: 'ebill', mode: 'gpay' },
//   { to: 1001, amount: 5000, msg: 'ebill', mode: 'gpay' }
// ]

// -----------5. print all transaction whose amount > 5000-----------
// [
//   { to: 1002, amount: 7000, msg: 'gift', mode: 'phonePay' },
//   { to: 1003, amount: 10000, msg: 'emi', mode: 'neft' }
// ]

// -----------6. print credit transaction of account 1002-----------
// [
//   { to: 1002, amount: 2000, msg: 'emi', mode: 'neft' },
//   { to: 1002, amount: 7000, msg: 'gift', mode: 'phonePay' },
//   { to: 1002, amount: 2000, msg: 'emi', mode: 'neft' }
// ]

// -----------7. print total credited amount to 1002-----------
// 11000

// -----------8. print debit transaction of account 1002-----------
// [
//   { to: 1000, amount: 5000, msg: 'ebill', mode: 'gpay' },
//   { to: 1001, amount: 2000, msg: 'emi', mode: 'neft' },
//   { to: 1003, amount: 1000, msg: 'recharge', mode: 'phonePay' }
// ]

// -----------9. print total debited amount from 1002-----------
// 8000

// -----------10. print transaction history of 1002-----------
// [
//   { to: 1002, amount: 2000, msg: 'emi', mode: 'neft' },
//   { to: 1002, amount: 7000, msg: 'gift', mode: 'phonePay' },
//   { to: 1002, amount: 2000, msg: 'emi', mode: 'neft' },
//   { to: 1000, amount: 5000, msg: 'ebill', mode: 'gpay' },
//   { to: 1001, amount: 2000, msg: 'emi', mode: 'neft' },
//   { to: 1003, amount: 1000, msg: 'recharge', mode: 'phonePay' }
// ]

// -----------11. print current balance of 1002-----------
// 111000

// -----------12. print highest balance account details-----------
// account 1002 has the highest balance of 100000
