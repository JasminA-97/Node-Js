class Student{
    constructor(id,name,div,mark){
        this.stid=id
        this.stname=name
        this.stdiv=div
        this.stmark=mark
    }
    display(){
        console.log(`--------Student details--------
          Id : ${this.stid}
        Name : ${this.stname}
         Div : ${this.stdiv}
        Mark : ${this.stmark}`);
    }
}
const stud=new Student(23,'Max','B',750)
stud.display()

//OUTPUT
// --------Student details--------
//           Id : 23
//         Name : Max
//          Div : B
//         Mark : 750