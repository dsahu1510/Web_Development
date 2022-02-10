function f(){

    var a=1;
    var b=1;
    var c=1;
    var d=20;

    if(a>0 && b>0 && c>0 && d>0){
        console.log("var is +ve");
    }
        else if(a<0 && b<0 && c<0 && d<0){
            console.log("var is -ve");
        }
            else if(a>0 && b>0 && c<0 && d<0){
                console.log("c and d are -ve");
            }
            else if(a<0 && b<0 && c>0 && d>0){
                console.log("a and b are -ve");
            }
            else{
                console.log("var equal to zero");
            }
}
f();