var express = require('express');

var router= express.Router();
var EmployeeModel = require('../model/employee.model');

router.post('/add', (req,res) => {
      
    var body = req.body;
    
    var document = new EmployeeModel(body);
     
    document.save(function(err,doc){
          if(err){
              res.send('error', error.message);
          }
          if(doc._id){
              res.send("employee added successfully!");
          }
    })
})

router.get('/list', (req,res) => {
      
     EmployeeModel.find({}, (err,docs)=>{
            if(err)
            {
                res.send(err);
            }
            if(docs){
                res.send(docs);
            }
     })
});

router.delete('/:id', (req,res) => {
      var id = req.params.id;
       EmployeeModel.deleteOne({id:id},(err,resp) => {
           if(err){
               res.send(err);
           }
           else{
               res.send("deleted successfully");
           }
       })
})

module.exports = router;