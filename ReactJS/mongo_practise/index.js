var mongoose = require('mongoose');
var Schema=mongoose.Schema;
 var UsersSchema = new Schema({
      empId: {
          type:String
      },
      empName: {
          type:String
      },
      empDesg: {
          type:String
      }
 });

 module.exports=mongoose.model('employee',UsersSchema);
