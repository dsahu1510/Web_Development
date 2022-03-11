var express = require('express');
var app =express();
var mongoose = require('mongoose');
var index = require('./index');

mongoose.connect("mongodb://localhost/L&T",(err) =>{
    if(err){
        console.log("error",err);
    }
    else{
        console.log("db connected");
    }
})

app.get('/Employee', (req,res) => {
index.find({},(err,docs) => {
    console.log(docs);
    res.send(docs);
})

})

app.listen(8000, () => {
    console.log("server started!");
})
// npm i express mongoose
//npm i express
