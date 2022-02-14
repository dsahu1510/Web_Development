class A{

    x1;
    x2;
    constructor(x1,x2){
        console.log("constructor called");
        this.x1= x1;
        this.x2= x2;
    }
}
class B extends A{
   x3;
   x4;
//    constructor(x3,x4){
//        //super();
//         this.x3= x3;
//         this.x4 = x4;
//    }
}
var b = new B(10,20);
console.log(b);