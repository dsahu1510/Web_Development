var mongoose = require('mongoose');
var Schema=mongoose.Schema;
 var UsersSchema = new Schema({
      id: {
          type:Number
      },
      name: {
          type:String
      },
      address: {
          type:String
      }
 });

 module.exports=mongoose.model('user',UsersSchema);
