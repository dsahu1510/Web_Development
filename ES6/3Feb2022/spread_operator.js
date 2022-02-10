
// spread operator
function f1(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}
var arr = [100, 200, 300];
f1(...arr);

// rest param and spread opertor
function f1(a,b,c, ...restparams){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(restparams)
}
var arr = [100, 200, 300, 400, 500];
f1(...arr);
