

// with array
var arr=['a', 'b', 'c', 'd'];

function f1(m){
    console.log(m); //
    m.age=21;
    m.name="anil";
}

f1(arr); // call by reference
console.log(arr); 


// with object
var obj = {
    name: "devyani",
    age: 24,
    gender: 'female'
}

function f1(m){
    console.log(m); //
    m.address = 'Raipur';
    m.state = "C.G.";
}

f1(obj); // call by reference
console.log(obj); //