var express = require('express');
var app =express();
var mongoose = require('mongoose');
var index = require('./index');

mongoose.connect("mongodb://localhost/Employee",(err) =>{
    if(err){
        console.log("error",err);
    }
    else{
        console.log("db connected");
    }
})

app.get('/employee', (req,res) => {
index.find({},(err,docs) => {
    console.log(docs);
    res.send(docs);
})

})

app.listen(9016, () => {
    console.log("server started!");
})
// npm I express mongoose
