
// var employee1 = {firstName: "Devyani", lastName: "Sahu"};
// var employee2 = {firstName: "Neeta", lastName: "Sahu"};

// function invite(greeting1, greeting2)
// {
//     console.log(greeting1 + ' ' + this.firstName + ' '+ this.lastName + ',' + greeting2);
// }

// invite.call(employee1, 'Hello', 'How Are You???');
// invite.call(employee2,'Hey', 'Where are you from??');


// // Apply

// var employee1 = {firstName: "Devyani", lastName: "Sahu"};
// var employee2 = {firstName: "Neeta", lastName: "Sahu"};

// function invite(greeting1, greeting2)
// {
//     console.log(greeting1 + ' ' + this.firstName + ' '+ this.lastName + ',' + greeting2);
// }

// invite.apply(employee1, ['Hello', 'How Are You???']);
// invite.apply(employee2,['Hey', 'Where are you from??']);


// // Bind

// var employee1 = {firstName: "Devyani", lastName: "Sahu"};
// var employee2 = {firstName: "Neeta", lastName: "Sahu"};

// function invite(greeting1, greeting2)
// {
//     console.log(greeting1 + ' ' + this.firstName + ' '+ this.lastName + ',' + greeting2);
// }

// var inviteEmployee1 = invite.bind(employee1);
// var inviteEmployee2 = invite.bind(employee2);

// inviteEmployee1('Hello', 'How Are You???');
// inviteEmployee2('Hey', 'Where are you from??');



//call fn 
var obj1= {
    firstName:"ravi",
    lastName: "kumar",
    address: "hyderabad",
     getDetails :  function(a,b,c){
         return this.firstName + "\t"+ this.lastName+ "\t"+ this.address+ "\t"+ a + "\t" + b + "\t" + c;
     }
}
// console.log(obj1.getDetails());
var obj2= {
   firstName:"rajesh",
   lastName: "reddy",
   address: "hyderabad"
}

var obj3= {
   firstName:"anil",
   lastName: "rao",
   address: "secbad"
}

var obj4 = {
    firstName: "devyani",
    lastName: "sahu",
    address: "raipur"
}
var arr=[10, 20, 30];

// console.log(obj1.getDetails.call(obj4,arr[0],arr[1],arr[2]));
//  console.log(obj1.getDetails.apply(obj2, arr));
// console.log(obj1.getDetails.apply(obj3, arr));

var product1 = {
    productName: "laptop",
    productPrice: "50k",
    getInfo: function(a, b, c){
        return this.productName + " "+ this.productPrice + " " +a + "\n" + b + "\n" + c;
    }
}

var product2 = {
    productName: "books",
    productPrice: "10k",
}

var product3 = {
    productName: "grocery",
    productPrice: "30k",
}
//  var arr=["stationary", "tables", "chairs"];
//  console.log(product1.getInfo.call(product2,arr[0], arr[1], arr[2]));
//  console.log(product1.getInfo.apply(product3,arr));

 var result = console.log(product1.getInfo.bind(product2, "a", "b", "c"));
 console.log(result);
 //result();