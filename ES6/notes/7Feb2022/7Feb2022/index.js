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
}

var emp = new Employee();

emp.employeeId=0;
console.log(emp.employeeId);
