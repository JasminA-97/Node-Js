class Bank{
    accountDetails= {
        1000: { acno: 1000, username: "userone", password: "userone", balance: 50000 },
        1001: { acno: 1001, username: "usertwo", password: "usertwo", balance: 5000 },
        1002: { acno: 1002, username: "userthree", password: "userthree", balance: 10000 },
        1003: { acno: 1003, username: "userfour", password: "userfour", balance: 6000 }
    }

    //1.validate account number function(acno)
    validateAccount(acno){
        return this.accountDetails.hasOwnProperty(acno)?true:false
    }

    //2.authenticate account(acno,password)
    authenticate(acno,password){
        if(this.validateAccount(acno)){
            if(this.accountDetails[acno].password==password){
                console.log("Authenticated successfully");
            }else{
                console.log("Authenticated failed...Invalid password!!!");
            }
        }else{
            console.log("Authentication failed...Invalid Account");
        }
    }

    //3.balance enquiry function(acno)
    balanceEnquiry(acno){
        if(this.validateAccount(acno)){
            console.log(`Account ${acno} balance is ${this.accountDetails[acno].balance}`);
        }else{
            console.log("invalid account!!!");
        }
    }
    //4.function for fund transfer(fromAcno,toAcno,amount)
    fundTransfer(fromAcno,toAcno,amount){
        if(this.validateAccount(fromAcno) && this.validateAccount(toAcno)){
            if(this.accountDetails[fromAcno].balance>=amount){
                console.log(`Before fund transfer, Debit account ${fromAcno}, balance :${this.accountDetails[fromAcno].balance} and, Credit account ${toAcno}, balance:${this.accountDetails[toAcno].balance}`);
                this.accountDetails[fromAcno].balance -= amount
                this.accountDetails[toAcno].balance += amount
                console.log(`Successfully transfer the amount...`);
                console.log(`After fund transfer, Debit account ${fromAcno}, balance :${this.accountDetails[fromAcno].balance} and, Credit account ${toAcno}, balance:${this.accountDetails[toAcno].balance}`);
            }else{
                console.log(`transaction failed...Insufficient balance`);
            }
        }else{
            console.log(`transaction failed...Invalid credit /Debit account`);
        }
    }

}
const accholder=new Bank()
console.log(accholder.validateAccount(1001)?'valid account':'invalid account')
accholder.authenticate(1005,"userone")
accholder.balanceEnquiry(1000)
accholder.fundTransfer(1001,1002,100)


//OUTPUT
// valid account

// Authentication failed...Invalid Account

// Account 1000 balance is 50000

// Before fund transfer, Debit account 1001, balance :5000 and, Credit account 1002, balance:10000
// Successfully transfer the amount...
// After fund transfer, Debit account 1001, balance :4900 and, Credit account 1002, balance:10100