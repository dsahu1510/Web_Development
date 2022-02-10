function f1(a,b)
{
    console.log(a);//undefined
    console.log(b);//undefined
}
f1();

//Default parameter value
function f1(a=10,b=20){
    console.log(a); //a =10;
    console.log(b); //b = 20;
}
f1();

function f1(a=10,b=20){
    console.log(a); //a=80 default parameters r being over-written by the arguments passed
    console.log(b); //b = 90
}
f1(80, 90);

// if we want a's default value and b's argument passed then this works.
function f1(a=10,b=20){
    console.log(a); // 10
    console.log(b); // 20
}
 f1(undefined,90);