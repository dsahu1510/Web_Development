
class Employee{
       ename;
       eaddress;
       edesg;
       project;
       constructor(ename, eaddress,edesg,project){
              this.ename = ename;
              this.eaddress = eaddress;
              this.edesg =edesg;
              this.project = project;
       }
       login(){
           console.log("employee logged in");
       }
       logout(){
           console.log("employee logged out");
       }
}
var emp = new Employee("ravi","hyd","dev","crm");
console.log(emp);

