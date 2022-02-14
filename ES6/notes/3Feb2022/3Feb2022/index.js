
function f1(a,b,c,...restParam){
    console.log(a,b,c);
    console.log(restParam);
}
var arr=[100,200,300,400,500];

//f1(arr[0],arr[1],arr[2]);

f1(...arr);

//f1(100,200,300,400,500);

