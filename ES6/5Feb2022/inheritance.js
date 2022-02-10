
// inheritance

class calc{
    add(a, b){
        console.log(a+b);
    }
    sub(a, b){
        console.log(a-b);
    }
}

class SciCalc extends calc{    //calc is being inherited here by SciCalc so calc is superclass nd SciCalc is sub class.
    square(num){
        console.log(num * num);
    }
}
// creating objects
var sci = new SciCalc(); //SciCalc is being called here bcoz it is inherting properties of calc
sci.add(10, 20);
sci.square(10);