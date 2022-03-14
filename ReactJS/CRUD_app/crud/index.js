var express = require('express');
var mongoose = require('mongoose');
var app = express();
app.use(express.json());
var EmployeeRoutes = require('./routes/employee.route');
mongoose.connect("mongodb://localhost/emps",(err) =>{
    if(err){
        console.log("error",err);
    }
    else{
        console.log("db connected");
    }
})
app.use(EmployeeRoutes);
app.get('/healthcheck', (req,res) => {
    res.send("App is running!!");
})
app.listen(9013, ()=>{
    console.log("Server started!");
})