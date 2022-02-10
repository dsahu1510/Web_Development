// function f(){

//     var num = [1, 0, -3, -8];

//     num = num.sort();
//     console.log(num)
// }
// f();


function f(){

    var x =1;
    var y =2;
    var z =3;
    var a =4;

    if(x>y && x>z ){

        if(y>z){
            console.log(x + " " + y + " " + z);
        }
        else{
            console.log(x + " " + z + " " + y);
        }
    }
    else if(y>z && y>a){
        if(z>a){
            console.log(y + " " + z +" " + a);
        }
        else{
            console.log(y + " "+ a +" " + z);
        }
    }
    else if(z>a && z>x){
        if(a>x){
            console.log(z +" " + a + " "+ x);
        }
        else{
            console.log(z +" "+ x +" " + a);
        }
    }
    else if(a>x && a>y){
        if(x>y){
            console.log(a +" "+ x +" " + y );
        }
        else{
            console.log(a + " "+ y + " " + x );
        }
    }

}
f();

