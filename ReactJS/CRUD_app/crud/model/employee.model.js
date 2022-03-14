var mongoose = require('mongoose');

var Schema = mongoose.Schema;

 var EmployeeSchema=new Schema( 
     {
          eid: {
              type:Number,
              unique:true,
              required:true
          },
          name:{
              type:String,
              required:true
          },
          designation:{
              type:String,
              required:true
          }
     }
 );

 module.exports=mongoose.model('employee',EmployeeSchema);