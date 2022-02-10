
class Employee{
    eid;
    ename;

        set employeeId(eid){
            if(eid == null || eid == 0){
                console.log("eid is incorrect");
                return;
            }
            else
            {
                this.eid = eid;
                 
            }
        }
        get employeeId(){
            if(this.eid){
               return this.eid;
            }
            else
            {
                console.log("eid is not available");
                return;
            }
        }
   
        set employeeName(ename){
            if(ename == null || ename.length < 5){
                console.log("ename is incorrect");
                return;
            }
            else
            {
                this.ename = ename;
                
            }
        }

        get employeeName(){
            if(this.ename){
            return this.ename;
            }
            else
            {
                console.log("ename is not available");
                return;
            }
        }
}

var emp = new Employee();

emp.employeeId=0;
emp.employeeName="dev";
console.log(emp.employeeId);
console.log(emp.employeeName);
