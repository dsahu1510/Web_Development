
// var str = "Aa2@";
// var pattern = //;
// console.log(pattern.test(str));


// var str ="Hellooo World! Hello W3Schools!";
// var pattern = /w+/g;
// console.log(str.match(pattern).length);


// var num = 1121;
// var pattern = /(0|5|6|3)/;
// console.log(pattern.test(num));

// var str="hellozk";
// var  pattern= /o[xyz]k/;
// console.log(pattern.test(str));

// var str="10";
// var  pattern= /[^0-6]/;
// console.log(pattern.test(str));

// var str="10000";
// var  pattern= /10*/g;
// console.log(pattern.test(str));

// var str="qsasAXCDVFaaxcss";
// var pattern=/[A-Z]+/;
// console.log(pattern.test(str));

// var str="jbjmbkmkoplZXj";
// var pattern=/[A-Z]*/;
// console.log(pattern.test(str)); 

// var str="SAlM";
// var pattern=/S[A-Z]+[a-z]?M/g;
// console.log(pattern.test(str));

var str="A,";
var pattern=/(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[\W])(?=.{8,})/;

console.log(pattern.test(str));


// var pattern=/(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[\W])(?=.{8,})/;
