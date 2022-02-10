
//arguments used in es5
function f1(a, b)
{
    console.log(a); //10
    console.log(b); //20
    console.log(arguments); //{'0':10, '1':20, '2':30, '3':40}
    console.log(arguments[2]); //30
    console.log(arguments[3]); //40
}
f1(10, 20, 30, 40);

//rest parameters
function f1(a, b, ...restparams)
{
    console.log(a); //10
    console.log(b); //20
    console.log(restparams); //thr remaining arguments r passed inside ...restparams nd stored in the form of an array i.e [30, 40]
    
}
f1(10, 20, 30, 40);

//
var f1 = (a=100, b=20, ...x) => console.log(a,b,x);
f1(0, 1, 2, 3, 4, 5); // 0 1 [2, 3, 4, 5]

//when we wnt a as 100 and b as 20 thn 
var f1 = (a=100, b=20, ...x) => console.log(a,b,x);
f1(undefined, undefined, 2, 3, 4, 5);
