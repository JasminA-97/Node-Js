class Employee{
    constructor(id,name,desig,salary){
        this.empid=id
        this.empname=name
        this.empdesig=desig
        this.empsal=salary
    }
    display(){
        console.log(`-------Employee details-------
          ID : ${this.empid}
        NAME : ${this.empname}
       DESIG : ${this.empdesig}
      SALARY : ${this.empsal}`);
    }
}
const emp=new Employee(100,'Max','Developer',45000)
emp.display()

//OUTPUT
// -------Employee details-------
//           ID : 100
//         NAME : Max
//        DESIG : Developer
//       SALARY : 45000